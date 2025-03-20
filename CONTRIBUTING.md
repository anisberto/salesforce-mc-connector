# Como Contribuir

Obrigado pelo seu interesse em contribuir com o Salesforce Marketing Cloud Connector! Este documento fornece diretrizes e instruções para contribuir com o projeto.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Git

## Configuração do Ambiente de Desenvolvimento

1. Faça um fork do repositório
2. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/salesforce-mc-connector.git
   cd salesforce-mc-connector
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Scripts Disponíveis

- `npm run build`: Compila o projeto
- `npm test`: Executa os testes
- `npm run lint`: Executa a verificação de código (ESLint)

## Processo de Contribuição

1. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b feature/nome-da-feature
   # ou
   git checkout -b fix/nome-da-correcao
   ```

2. Faça suas alterações no código

3. Execute os testes e verifique se não há erros de lint:
   ```bash
   npm test
   npm run lint
   ```

4. Commit suas alterações:
   ```bash
   git commit -m "descrição clara das alterações"
   ```

5. Push para sua branch:
   ```bash
   git push origin feature/nome-da-feature
   ```

6. Abra um Pull Request (PR) no GitHub

## Diretrizes de Código

- Siga as convenções de código existentes no projeto
- Mantenha o código limpo e bem documentado
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Use commits descritivos e claros

## Estrutura do Projeto

```
salesforce-mc-connector/
├── src/               # Código fonte
├── dist/             # Arquivos compilados
├── tests/            # Testes
├── package.json      # Configurações e dependências
└── rollup.config.js  # Configuração do Rollup
```

## Testes

- Escreva testes unitários para novas funcionalidades
- Mantenha a cobertura de testes acima de 80%
- Execute todos os testes antes de submeter um PR

## Documentação

- Atualize o README.md se necessário
- Documente novas funcionalidades
- Mantenha os comentários no código atualizados

## Processo de Review

1. Seu PR será revisado por mantenedores do projeto
2. Responda aos comentários e faça as alterações necessárias
3. Após aprovação, seu código será mergeado

## Boas Práticas

- Mantenha as alterações pequenas e focadas
- Descreva claramente as mudanças no PR
- Inclua exemplos de uso quando adicionar novas funcionalidades
- Atualize a versão do projeto quando necessário

## Suporte

Se você tiver dúvidas ou precisar de ajuda:
- Abra uma issue no GitHub
- Entre em contato com os mantenedores do projeto

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto (MIT). 