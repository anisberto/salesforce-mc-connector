/**
 * SalesforceConnector - Biblioteca para integração com Salesforce Marketing Cloud
 * 
 * Esta biblioteca facilita a persistência de dados em Data Extensions do Salesforce
 * Marketing Cloud, permitindo operações de inserção e atualização em múltiplas Data Extensions.
 */
import fetch from 'cross-fetch';

class SalesforceConnector {
  constructor(config = {}) {
    this.accessKey = config.accessKey || '';
    this.secretKey = config.secretKey || '';
    this.baseUrl = config.baseUrl || 'https://mcapi.salesforce.com/data/v1';
    this.timeout = config.timeout || 30000;
    this.maxRetries = config.maxRetries || 3;
    this.retryDelay = config.retryDelay || 1000;
    
    this.token = null;
    this.tokenExpiry = null;
    
    this.dataExtensions = {};
    
    if (config.dataExtensionKey) {
      this.addDataExtension('default', config.dataExtensionKey);
    }
  }

  /**
   * Configura as credenciais de autenticação
   * @param {Object} credentials - Objeto contendo as credenciais
   */
  setCredentials(credentials = {}) {
    this.accessKey = credentials.accessKey || this.accessKey;
    this.secretKey = credentials.secretKey || this.secretKey;
    this.baseUrl = credentials.baseUrl || this.baseUrl;
  }

  /**
   * Adiciona uma Data Extension ao connector
   * @param {string} name - Nome de referência para a Data Extension
   * @param {string} key - Chave da Data Extension no Salesforce
   * @returns {SalesforceConnector} Instância para encadeamento
   */
  addDataExtension(name, key) {
    this.dataExtensions[name] = key;
    return this;
  }

  /**
   * Remove uma Data Extension do connector
   * @param {string} name - Nome de referência da Data Extension
   * @returns {SalesforceConnector} Instância para encadeamento
   */
  removeDataExtension(name) {
    delete this.dataExtensions[name];
    return this;
  }

  /**
   * Obtém a chave de uma Data Extension pelo nome
   * @param {string} name - Nome de referência da Data Extension
   * @returns {string} Chave da Data Extension
   * @private
   */
  _getDataExtensionKey(name = 'default') {
    const key = this.dataExtensions[name];
    if (!key) {
      throw new Error(`Data Extension "${name}" não encontrada. Use addDataExtension() para registrá-la.`);
    }
    return key;
  }

  /**
   * Obtém o token JWT para autenticação com o Salesforce
   * @returns {Promise<string>} Token JWT
   * @private
   */
  async _getToken() {
    if (this.token && this.tokenExpiry && new Date() < this.tokenExpiry) {
      return this.token;
    }

    try {
      const response = await fetch(`${this.baseUrl}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          accessKey: this.accessKey,
          secretKey: this.secretKey
        })
      });

      if (!response.ok) {
        throw new Error(`Erro de autenticação: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      this.token = data.token;
      
      const expiryMs = (data.expiresIn || 3600) * 1000;
      this.tokenExpiry = new Date(Date.now() + expiryMs);
      
      return this.token;
    } catch (error) {
      throw new Error(`Falha na obtenção do token: ${error.message}`);
    }
  }

  /**
   * Executa requisição com retry em caso de falha
   * @param {Function} requestFn - Função que realiza a requisição
   * @returns {Promise<Object>} Resposta da requisição
   * @private
   */
  async _executeWithRetry(requestFn) {
    let lastError;
    
    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      try {
        return await requestFn();
      } catch (error) {
        lastError = error;
        
        if (error.status && [429, 500, 502, 503, 504].includes(error.status)) {
          const delay = this.retryDelay * Math.pow(2, attempt);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        
        throw error;
      }
    }
    
    throw lastError;
  }

  /**
   * Valida o formato dos dados de acordo com o padrão esperado pelo Salesforce
   * @param {Object} data - Dados a serem validados
   * @returns {boolean} Resultado da validação
   * @private
   */
  _validateDataFormat(data) {
    if (!Array.isArray(data)) {
      throw new Error('Os dados devem estar em formato de array');
    }

    for (const item of data) {
      if (!item.keys || typeof item.keys !== 'object' || Object.keys(item.keys).length === 0) {
        throw new Error('Cada item deve ter uma propriedade "keys" não vazia');
      }

      if (!item.values || typeof item.values !== 'object') {
        throw new Error('Cada item deve ter uma propriedade "values"');
      }
    }

    return true;
  }

  /**
   * Realiza requisição para o Salesforce Marketing Cloud
   * @param {string} endpoint - Endpoint da API
   * @param {string} method - Método HTTP (GET, POST, etc)
   * @param {Object} data - Dados a serem enviados
   * @returns {Promise<Object>} Resposta da requisição
   * @private
   */
  async _request(endpoint, method, data = null) {
    const token = await this._getToken();
    
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      timeout: this.timeout
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    return this._executeWithRetry(async () => {
      const response = await fetch(`${this.baseUrl}${endpoint}`, options);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error = new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        error.status = response.status;
        error.details = errorData;
        throw error;
      }
      
      return response.json();
    });
  }

  /**
   * Constrói a string de consulta para filtros
   * @param {Object} filter - Objeto de filtro
   * @returns {string} String de consulta formatada
   * @private
   */
  _buildFilterQuery(filter) {
    if (!filter || Object.keys(filter).length === 0) {
      return '';
    }

    const parts = [];
    
    Object.entries(filter).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        parts.push(`${key}=${encodeURIComponent(value)}`);
      }
    });
    
    if (filter.$filter) {
      parts.push(`$filter=${encodeURIComponent(filter.$filter)}`);
    }
    
    if (filter.$orderby) {
      parts.push(`$orderby=${encodeURIComponent(filter.$orderby)}`);
    }
    
    if (filter.$top) {
      parts.push(`$top=${filter.$top}`);
    }
    
    if (filter.$skip) {
      parts.push(`$skip=${filter.$skip}`);
    }
    
    return parts.length > 0 ? `?${parts.join('&')}` : '';
  }

  /**
   * Insere ou atualiza dados na Data Extension especificada
   * @param {Array} data - Array de objetos no formato esperado pelo Salesforce
   * @param {Object} options - Opções adicionais para a operação
   * @param {string} dataExtensionName - Nome da Data Extension a ser utilizada
   * @returns {Promise<Object>} Resultado da operação
   */
  async upsertData(data, options = {}, dataExtensionName = 'default') {
    const dataExtensionKey = this._getDataExtensionKey(dataExtensionName);
    
    this._validateDataFormat(data);

    const endpoint = `/dataextensions/key:${dataExtensionKey}/rows`;
    return this._request(endpoint, 'POST', data);
  }

  /**
   * Insere dados na Data Extension especificada
   * @param {Array} data - Array de objetos no formato esperado pelo Salesforce
   * @param {string} dataExtensionName - Nome da Data Extension a ser utilizada
   * @returns {Promise<Object>} Resultado da operação
   */
  async insertData(data, dataExtensionName = 'default') {
    return this.upsertData(data, { operation: 'insert' }, dataExtensionName);
  }

  /**
   * Atualiza dados na Data Extension especificada
   * @param {Array} data - Array de objetos no formato esperado pelo Salesforce
   * @param {string} dataExtensionName - Nome da Data Extension a ser utilizada
   * @returns {Promise<Object>} Resultado da operação
   */
  async updateData(data, dataExtensionName = 'default') {
    return this.upsertData(data, { operation: 'update' }, dataExtensionName);
  }

  /**
   * Consulta dados na Data Extension especificada
   * @param {Object} filter - Filtro para a consulta
   * @param {string} dataExtensionName - Nome da Data Extension a ser utilizada
   * @returns {Promise<Array>} Resultado da consulta
   */
  async queryData(filter = {}, dataExtensionName = 'default') {
    const dataExtensionKey = this._getDataExtensionKey(dataExtensionName);
    const queryString = this._buildFilterQuery(filter);

    const endpoint = `/dataextensions/key:${dataExtensionKey}/rows${queryString}`;
    return this._request(endpoint, 'GET');
  }

  /**
   * Consulta dados na Data Extension usando filtro OData
   * @param {string} oDataFilter - Expressão de filtro OData
   * @param {Object} options - Opções adicionais (ordenação, paginação)
   * @param {string} dataExtensionName - Nome da Data Extension a ser utilizada
   * @returns {Promise<Array>} Resultado da consulta
   */
  async queryWithOData(oDataFilter, options = {}, dataExtensionName = 'default') {
    const filter = {
      $filter: oDataFilter,
      ...options
    };
    
    return this.queryData(filter, dataExtensionName);
  }

  /**
   * Busca um único registro pelo valor da chave
   * @param {string} keyField - Nome do campo chave
   * @param {string|number} keyValue - Valor da chave
   * @param {string} dataExtensionName - Nome da Data Extension a ser utilizada
   * @returns {Promise<Object>} Registro encontrado ou null
   */
  async findByKey(keyField, keyValue, dataExtensionName = 'default') {
    const filter = {
      $filter: `${keyField} eq '${keyValue}'`,
      $top: 1
    };
    
    const results = await this.queryData(filter, dataExtensionName);
    return results.length > 0 ? results[0] : null;
  }

  /**
   * Cria um objeto de dados no formato esperado pelo Salesforce
   * @param {Object} keys - Objeto contendo as chaves para identificação
   * @param {Object} values - Objeto contendo os valores a serem inseridos/atualizados
   * @returns {Object} Objeto formatado para o Salesforce
   */
  static createDataObject(keys, values) {
    return {
      keys,
      values
    };
  }

  /**
   * Cria uma coleção de dados no formato esperado pelo Salesforce
   * @param {Array} items - Array de objetos contendo keys e values
   * @returns {Array} Array formatado para o Salesforce
   */
  static createDataCollection(items) {
    return items.map(item => SalesforceConnector.createDataObject(item.keys, item.values));
  }
}

export default SalesforceConnector;