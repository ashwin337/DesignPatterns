export default ({})
interface Database{
    connect():void;
    query(sq:string):any;
    close():void
}

class PostgreSQL implements Database{
    connect(): void {
        console.log("conneted to pg");
    }
    query(sq: string) {
        console.log("executing pg",sq);
    }
    close(): void {
        console.log("closing pg");
    }
}

class MongoDBDatabase implements Database{
    connect(): void {
        console.log("connected to mongo");
    }
    query(sq: string) {
        console.log("executing mongo",sq);
    }
    close(): void {
        console.log("closing mongo");
    }
}

abstract class DatabaseService{
    constructor(protected db:Database){
        console.log("parent constructor");
    }

    abstract fetchData(query: string):any;
}

class ClientDatabaseService extends DatabaseService{
    constructor(db:Database){
        super(db)
    }
    fetchData(query: string) {
        this.db.connect()
        const res=this.db.query(query);
        this.db.close()
        return res;
    }
}


const dbClient=new ClientDatabaseService(new PostgreSQL());
const dbClient2=new ClientDatabaseService(new MongoDBDatabase()); 
dbClient.fetchData("get users")
dbClient2.fetchData("get users")