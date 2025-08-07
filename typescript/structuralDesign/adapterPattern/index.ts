class MySQLDatabse{
    connectToMySQL(uri:string):void{
        console.log("connecting to my sql ",uri);
    }
    executeMySqlQuery(query:string):void{
        console.log("executing mysql query ",query);
    }
}

class pgSQLDatabse{
    connectToPostgres(uri:string):void{
        console.log("connecting to pg sql ",uri);
    }
    executePostgresQuery(query:string):void{
        console.log("executing pg query ",query);
    }
}


class AdapterDB{
     private database = new pgSQLDatabse();

  connectToMySQL(uri: string): void {
    this.database.connectToPostgres(uri);
  }

  executeMySQLQuery(query: string): void {
    this.database.executePostgresQuery(query);
  }
}