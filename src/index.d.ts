declare class SalesforceConnector {
    constructor(config?: {
      accessKey?: string;
      secretKey?: string;
      baseUrl?: string;
      dataExtensionKey?: string;
      timeout?: number;
      maxRetries?: number;
      retryDelay?: number;
    });
  
    accessKey: string;
    secretKey: string;
    baseUrl: string;
    timeout: number;
    maxRetries: number;
    retryDelay: number;
    token: string | null;
    tokenExpiry: Date | null;
    dataExtensions: Record<string, string>;
  
    setCredentials(credentials: {
      accessKey?: string;
      secretKey?: string;
      baseUrl?: string;
    }): void;
  
    addDataExtension(name: string, key: string): SalesforceConnector;
    removeDataExtension(name: string): SalesforceConnector;
  
    upsertData(
      data: Array<{ keys: Record<string, any>; values: Record<string, any> }>,
      options?: Record<string, any>,
      dataExtensionName?: string
    ): Promise<any>;
  
    insertData(
      data: Array<{ keys: Record<string, any>; values: Record<string, any> }>,
      dataExtensionName?: string
    ): Promise<any>;
  
    updateData(
      data: Array<{ keys: Record<string, any>; values: Record<string, any> }>,
      dataExtensionName?: string
    ): Promise<any>;
  
    queryData(
      filter?: Record<string, any>,
      dataExtensionName?: string
    ): Promise<Array<any>>;
  
    queryWithOData(
      oDataFilter: string,
      options?: Record<string, any>,
      dataExtensionName?: string
    ): Promise<Array<any>>;
  
    findByKey(
      keyField: string,
      keyValue: string | number,
      dataExtensionName?: string
    ): Promise<any | null>;
  
    static createDataObject(
      keys: Record<string, any>,
      values: Record<string, any>
    ): { keys: Record<string, any>; values: Record<string, any> };
  
    static createDataCollection(
      items: Array<{ keys: Record<string, any>; values: Record<string, any> }>
    ): Array<{ keys: Record<string, any>; values: Record<string, any> }>;
  }
  
  export default SalesforceConnector;