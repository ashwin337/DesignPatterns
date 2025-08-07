interface ServerRequest{
    handle(request:any):void;
}

class BaseServer implements ServerRequest{
    handle(request: any): void {
        console.log("Handle Request: ",request);
    }
}

abstract class ServerRequestDecorator implements ServerRequest{
    constructor(protected server:ServerRequest){}
    abstract handle(request: any): void 
}

class LoggingMiddleware extends ServerRequestDecorator{
    handle(request: any): void {
        console.log("Logging request: ",request);
        this.server.handle(request)
    }
}

class AuthMiddleware extends ServerRequestDecorator{
    handle(request: any): void {
        if(request.isAuthenticated){
            console.log("Request is authenticated");
            this.server.handle(request)
        }
        else{
            console.log("unauthorised access");
        }
    }
}

const request={
    isAuthenticated:true,
    body:"hello"
}

let server:ServerRequest=new BaseServer();
server=new LoggingMiddleware(server)
server=new AuthMiddleware(server)
server.handle(request);