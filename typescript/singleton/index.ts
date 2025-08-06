// class Singleton{
//     private static instance:Singleton
//     private static _value:number

//     private constructor(){}

//     public static getInstance(){
//         if(!Singleton.instance){
//             Singleton.instance=new Singleton()
//         }
//         return Singleton.instance
//     }

//     set value(value:number){
//         Singleton._value=value
//     }
    
//     get value() {
//         return Singleton._value
//     }
    
// }
// let i1=Singleton.getInstance();
// i1.value=10;
// let i2=Singleton.getInstance();
// console.log(i2.value);
// console.log(Singleton.getInstance);

class SingletonLogger{
    private static instance:SingletonLogger
    
    private constructor(){}

    public static getInstance(){
        if(!SingletonLogger.instance){
            SingletonLogger.instance=new SingletonLogger()
        }
        return SingletonLogger.instance
    }

    dbLogger(msg:string){
        console.log(`db ${msg}`);
    }
    otherLogger(msg:string){
        console.log(`other ${msg}`);
    }
}

let i1=SingletonLogger.getInstance()
let i2=SingletonLogger.getInstance()

i1.dbLogger("ok")
i2.dbLogger("not ok")