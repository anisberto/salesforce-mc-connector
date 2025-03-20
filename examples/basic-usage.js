// Importa a biblioteca
const SalesforceConnector = require('salesforce-mc-connector');

// Função assíncrona para demonstrar o uso
async function demonstrateConnector() {
  try {
    console.log('Inicializando SalesforceConnector...');
    
    // Cria uma instância do connector
    const connector = new SalesforceConnector({
      accessKey: 'SUA_ACCESS_KEY', // Substitua pela sua chave de acesso
      secretKey: 'SUA_SECRET_KEY', // Substitua pela sua chave secreta
      timeout: 30000
    });
    
    // Adicionar Data Extensions
    connector.addDataExtension('clientes', 'CHAVE_DE_DATA_EXTENSION_CLIENTES');
    connector.addDataExtension('produtos', 'CHAVE_DE_DATA_EXTENSION_PRODUTOS');
    
    console.log('Data Extensions configuradas:', Object.keys(connector.dataExtensions));
    
    // Criar dados para inserção em diferentes Data Extensions
    const clienteData = [
      SalesforceConnector.createDataObject(
        { email: "cliente@exemplo.com" },
        {
          nome: "Cliente Teste",
          telefone_celular: "11999999999",
          cpf_cnpj: "12345678900",
          tipo_conta: "f",
          data_cadastro: new Date().toISOString()
        }
      )
    ];
    
    const produtoData = [
      SalesforceConnector.createDataObject(
        { codigo: "PROD001" },
        {
          nome: "Produto Teste",
          preco: 99.90,
          categoria: "Teste",
          estoque: 100
        }
      )
    ];
    
    // Inserir dados
    console.log('Inserindo dados de cliente...');
    const resultadoCliente = await connector.insertData(clienteData, 'clientes');
    console.log('Resultado da inserção de cliente:', resultadoCliente);
    
    console.log('Inserindo dados de produto...');
    const resultadoProduto = await connector.insertData(produtoData, 'produtos');
    console.log('Resultado da inserção de produto:', resultadoProduto);
    
    // Buscar dados
    console.log('Buscando cliente...');
    const cliente = await connector.findByKey('email', 'cliente@exemplo.com', 'clientes');
    console.log('Cliente encontrado:', cliente);
    
    // Buscar com filtro OData
    console.log('Buscando produtos com filtro...');
    const produtos = await connector.queryWithOData("preco lt 100", { $orderby: 'nome asc' }, 'produtos');
    console.log('Produtos encontrados:', produtos);
    
    // Exemplo de atualização
    console.log('Atualizando dados de cliente...');
    const clienteUpdate = [
      SalesforceConnector.createDataObject(
        { email: "cliente@exemplo.com" },
        {
          telefone_celular: "11888888888", // Novo telefone
          ultima_atualizacao: new Date().toISOString()
        }
      )
    ];
    
    const resultadoUpdate = await connector.updateData(clienteUpdate, 'clientes');
    console.log('Resultado da atualização:', resultadoUpdate);
    
  } catch (error) {
    console.error('Erro ao demonstrar o connector:', error);
  }
}

// Executar a demonstração
demonstrateConnector();