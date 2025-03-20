const SalesforceConnector = require('../dist/index');

// Mock da função fetch global
global.fetch = jest.fn();

describe('SalesforceConnector', () => {
  // Reset mocks entre testes
  beforeEach(() => {
    fetch.mockClear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // Teste de criação de instância
  test('deve criar uma instância com configurações padrão', () => {
    const connector = new SalesforceConnector();
    
    expect(connector.baseUrl).toBe('https://mcapi.salesforce.com/data/v1');
    expect(connector.timeout).toBe(30000);
    expect(connector.maxRetries).toBe(3);
    expect(connector.dataExtensions).toEqual({});
  });

  // Teste de criação de instância com configurações personalizadas
  test('deve criar uma instância com configurações personalizadas', () => {
    const connector = new SalesforceConnector({
      accessKey: 'test-key',
      secretKey: 'test-secret',
      baseUrl: 'https://customapi.salesforce.com',
      dataExtensionKey: 'test-de-key',
      timeout: 60000,
      maxRetries: 5
    });
    
    expect(connector.accessKey).toBe('test-key');
    expect(connector.secretKey).toBe('test-secret');
    expect(connector.baseUrl).toBe('https://customapi.salesforce.com');
    expect(connector.timeout).toBe(60000);
    expect(connector.maxRetries).toBe(5);
    expect(connector.dataExtensions).toEqual({ default: 'test-de-key' });
  });

  // Teste de gerenciamento de Data Extensions
  test('deve adicionar e remover Data Extensions corretamente', () => {
    const connector = new SalesforceConnector();
    
    connector.addDataExtension('test1', 'key1');
    connector.addDataExtension('test2', 'key2');
    
    expect(connector.dataExtensions).toEqual({
      test1: 'key1',
      test2: 'key2'
    });
    
    connector.removeDataExtension('test1');
    
    expect(connector.dataExtensions).toEqual({
      test2: 'key2'
    });
  });

  // Teste de validação de formato de dados
  test('deve validar corretamente o formato dos dados', () => {
    const connector = new SalesforceConnector();
    const validData = [
      { 
        keys: { email: 'test@example.com' },
        values: { name: 'Test User', phone: '123456789' }
      }
    ];
    
    expect(() => connector._validateDataFormat(validData)).not.toThrow();
    
    // Formato inválido (não é array)
    expect(() => connector._validateDataFormat({
      keys: { email: 'test@example.com' },
      values: { name: 'Test User' }
    })).toThrow('Os dados devem estar em formato de array');
    
    // Formato inválido (sem keys)
    expect(() => connector._validateDataFormat([{
      values: { name: 'Test User' }
    }])).toThrow('Cada item deve ter uma propriedade "keys" não vazia');
    
    // Formato inválido (sem values)
    expect(() => connector._validateDataFormat([{
      keys: { email: 'test@example.com' }
    }])).toThrow('Cada item deve ter uma propriedade "values"');
  });

  // Teste de construção de query
  test('deve construir query de filtro corretamente', () => {
    const connector = new SalesforceConnector();
    
    expect(connector._buildFilterQuery({})).toBe('');
    
    expect(connector._buildFilterQuery({
      name: 'Test',
      age: 30
    })).toBe('?name=Test&age=30');
    
    expect(connector._buildFilterQuery({
      $filter: "name eq 'Test' and age gt 30",
      $orderby: 'name asc',
      $top: 10,
      $skip: 20
    })).toBe('?$filter=name%20eq%20%27Test%27%20and%20age%20gt%2030&$orderby=name%20asc&$top=10&$skip=20');
  });

  test('deve criar objetos de dados no formato correto', () => {
    const dataObject = SalesforceConnector.createDataObject(
      { email: 'test@example.com' },
      { name: 'Test User', age: 30 }
    );
    
    expect(dataObject).toEqual({
      keys: { email: 'test@example.com' },
      values: { name: 'Test User', age: 30 }
    });
    
    const collection = SalesforceConnector.createDataCollection([
      { 
        keys: { email: 'test1@example.com' }, 
        values: { name: 'User 1' } 
      },
      { 
        keys: { email: 'test2@example.com' }, 
        values: { name: 'User 2' } 
      }
    ]);
    
    expect(collection).toEqual([
      { keys: { email: 'test1@example.com' }, values: { name: 'User 1' } },
      { keys: { email: 'test2@example.com' }, values: { name: 'User 2' } }
    ]);
  });

  // Teste básico de autenticação
  test('deve obter token de autenticação', async () => {
    const connector = new SalesforceConnector({
      accessKey: 'test-key',
      secretKey: 'test-secret'
    });
    
    // Mock da resposta de autenticação
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: 'mock-jwt-token', expiresIn: 3600 })
    });
    
    const token = await connector._getToken();
    
    expect(token).toBe('mock-jwt-token');
    expect(connector.token).toBe('mock-jwt-token');
    expect(connector.tokenExpiry).toBeDefined();
    
    expect(fetch).toHaveBeenCalledWith(
      'https://mcapi.salesforce.com/data/v1/auth',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessKey: 'test-key',
          secretKey: 'test-secret'
        })
      })
    );
  });
});