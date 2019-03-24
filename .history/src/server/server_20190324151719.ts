import { CoreModule } from '../core/core';

export class Server {

    private db;
    private express;

    constructor(databaseConnector) {
        if(databaseConnector) {
            this.db = databaseConnector;
            this.express = new CoreModule().express;
        }
    }
}