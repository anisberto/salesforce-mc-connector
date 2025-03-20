# Salesforce MC Connector

Biblioteca JavaScript para integração simplificada com Data Extensions do Salesforce Marketing Cloud.

## 📦 Instalação

Use o npm para instalar a biblioteca:
```bash
npm install salesforce-mc-connector
```

## 🔧 Configuração Inicial

Após a instalação, configure a conexão com as credenciais fornecidas pelo Salesforce:
```javascript
import SalesforceMCConnector from 'salesforce-mc-connector';

const connector = new SalesforceMCConnector({
  clientId: 'SEU_CLIENT_ID',
  clientSecret: 'SEU_CLIENT_SECRET',
  authUrl: 'https://auth.exacttargetapis.com/v2/token',
  restUrl: 'https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com'
});
```

## 🚀 Exemplos de Uso

### Inicialização
```javascript
const SalesforceConnector = require('salesforce-mc-connector');

const connector = new SalesforceConnector({
  accessKey: 'SUA_ACCESS_KEY',
  secretKey: 'SUA_SECRET_KEY',
  timeout: 30000
});
```

### Configuração de Data Extensions
```javascript
connector.addDataExtension('clientes', 'CHAVE_DE_DATA_EXTENSION_CLIENTES');
connector.addDataExtension('produtos', 'CHAVE_DE_DATA_EXTENSION_PRODUTOS');
```

### Inserção de Dados
```javascript
const clienteData = [
  SalesforceConnector.createDataObject(
    { email: 'cliente@exemplo.com' },
    {
      nome: 'Cliente Teste',
      telefone_celular: '11999999999',
      cpf_cnpj: '12345678900',
      tipo_conta: 'f',
      data_cadastro: new Date().toISOString()
    }
  )
];

await connector.insertData(clienteData, 'clientes');
```

### Consulta de Dados
```javascript
const cliente = await connector.findByKey('email', 'cliente@exemplo.com', 'clientes');
console.log(cliente);
```

### Inserção de Dados
```javascript
connector.insert('MinhaDataExtension', {
  Email: 'exemplo@dominio.com',
  Nome: 'Fulano de Tal'
});
```

### Atualização de Dados
```javascript
connector.update('MinhaDataExtension', {
  Key: '12345',
  Email: 'novoemail@dominio.com'
});
```

### Consulta de Dados
```javascript
const resultado = await connector.query('MinhaDataExtension', {
  filter: { Email: 'exemplo@dominio.com' }
});
console.log(resultado);
```

## 📄 Documentação

Consulte a documentação completa no repositório oficial do GitHub: [Salesforce MC Connector](https://github.com/anisberto/salesforce-mc-connector)

## 🛡️ Licença
Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

