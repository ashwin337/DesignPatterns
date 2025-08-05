abstract class paymentProcessor{
    abstract processPayments():void;
}

class creditCard implements paymentProcessor{
    constructor(){}

    processPayments(): void {
        console.log("cc");
    }
    
}

class debitCard implements paymentProcessor{
    constructor(){}

    processPayments(): void {
        console.log("dc");
    }
    
}

class paypal implements paymentProcessor{
    constructor(){}

    processPayments(): void {
        console.log("paypal");
    }
    
}

    function Paymentsmethod(method:paymentProcessor){
        method.processPayments()
    }

    Paymentsmethod(new creditCard())
    Paymentsmethod(new debitCard())
    Paymentsmethod(new paypal())
