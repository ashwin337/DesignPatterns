// export default({})
// interface Handler{
//     setNext(handler:Handler):Handler;
//     handle(request:string):string|null
// }

// abstract class AbstarctHandler implements Handler{
//     private nextHandler:Handler|null=null
//     setNext(handler: Handler): Handler {
//         this.nextHandler=handler;
//         return handler;        
//     }
//     handle(request: string): string | null {
//         if(this.nextHandler){
//             return this.nextHandler.handle(request);
//         }
//         return null;
//     }
// }

// class monkeyHandler extends AbstarctHandler{
//     public handle(request: string): string | null {
//         if(request==="Banana"){
//             return `monkey will eat ${request}`;
//         }
//         return super.handle(request)
//     }
// }

// class squirrelHandler extends AbstarctHandler{
//     public handle(request: string): string | null {
//         if(request==="Nut"){
//             return `squirrel will eat ${request}`;
//         }
//         return super.handle(request)
//     }
// }

// class dogHandler extends AbstarctHandler{
//     public handle(request: string): string | null {
//         if(request==="MeatBall"){
//             return `dog will eat ${request}`;
//         }
//         return super.handle(request)
//     }
// }

// function clientCode(handler: Handler) {
//   const foods = ["Nut", "Banana", "Cup of coffee", "MeatBall"];

//   for (const food of foods) {
//     console.log(`Who wants a ${food}?`);

//     const result = handler.handle(food);
//     if (result) {
//       console.log(`${result}`);
//     } else {
//       console.log(`${food} was left untouched.`);
//     }
//   }
// }
// const monkey = new monkeyHandler();
// const squirrel = new squirrelHandler();
// const dog = new dogHandler();
// monkey.setNext(squirrel).setNext(dog);
// clientCode(monkey);

interface Handler{
    setNext(handler:Handler):Handler
    handle(order:Order):string|null
}

abstract class AbstractHandler implements Handler{
    private nextHandler:Handler|null;
    setNext(handler: Handler): Handler {
        this.nextHandler=handler;
        return handler;
    }
    handle(order: Order): string | null {
        if(this.nextHandler){
            return this.nextHandler.handle(order)
        }
        return null;
    }    
} 
class ValidationHandler extends AbstractHandler{
    handle(order: Order): string | null {
        if(order.isValid()){
             return super.handle(order)
        }
       return "Order Invalid"
       
    }
}
class DiscountHandler extends AbstractHandler{
    handle(order: Order): string | null {
        order.applyDiscount()
        return super.handle(order)
    }
}
class PaymentHandler extends AbstractHandler{
    handle(order: Order): string | null {
       if(order.processPayment()) return super.handle(order)
        return "Payment failed"
    }
}
class ShippingHandler extends AbstractHandler{
    handle(order: Order): string | null {
       order.ship()
        return "order placed"
    }
}


class Order{
    isValid(){
        return true;
    }
    applyDiscount(){}
    processPayment(){
        return true;
    }
    ship(){}
}

const order = new Order();
const handler = new ValidationHandler();

handler
  .setNext(new DiscountHandler())
  .setNext(new PaymentHandler())
  .setNext(new ShippingHandler());

console.log(handler.handle(order));