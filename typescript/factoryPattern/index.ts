// abstract class Car{
//     constructor(public model:string,public productionYear:number){}
//     abstract displayCarInfo():void;    
// }

// class Sedan extends Car{
//     public displayCarInfo(): void {
//         console.log("this is a sedan ",this.model);
//     }
// }

// class Suv extends Car{
//     public displayCarInfo(): void {
//         console.log("this is a suv ",this.model);
//     }
// }
// class Hatchback extends Car{
//     public displayCarInfo(): void {
//         console.log("this is a hatchback ",this.model);
//     }
// }

// class CarFactory{
//     public createcar(type:"sedan"|"suv"|"hatchback",model:string,productionYear:number):Car{
//         switch(type){
//             case "sedan":
//                 return new Sedan(model,productionYear);
//             case "suv":
//                 return new Suv(model,productionYear)
//             case "hatchback":
//                 return new Hatchback(model,productionYear)
//             default:
//                 throw new Error("Invalid car type")
//         }
//     }
// }

// const carFactory=new CarFactory();
// const sedan=carFactory.createcar("sedan","camry",2023);
// sedan.displayCarInfo()

abstract class PaymentProcessor{
    constructor(public amount:number){}
    public abstract processPayment():void
}

class PaypalProcessor extends PaymentProcessor{
    public processPayment(): void {
        console.log("paypal payment processed ",this.amount);
    }
}

class StripeProcessor extends PaymentProcessor{
    public processPayment(): void {
        console.log("stripe payment processed ",this.amount);
    }
}

class BankTransferProcessor extends PaymentProcessor{
    public processPayment(): void {
        console.log("Bank transfer processed ",this.amount);
    }
}

class PaymentProcessorFactory{
    public payment(method:"paypal"|"stripe"|"bank",amount:number):PaymentProcessor{
    switch(method){
            case "paypal":
                return new PaypalProcessor(amount)
            case "stripe":
                return new StripeProcessor(amount)
            case "bank":
                return new BankTransferProcessor(amount)
            default:
                throw new Error("Not a payment method")
        }
    }
}

const paymentProcessorFactory=new PaymentProcessorFactory();
console.log(paymentProcessorFactory.payment("paypal",100));
