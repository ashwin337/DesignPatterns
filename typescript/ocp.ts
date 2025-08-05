interface Customer{
    giveDiscount():number;
    addLoyaltyPoints(amountSpent:number):number;
}

class premiumCustomer implements Customer{
    giveDiscount(): number {
        return 20;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent*2;
    }
}

class regularCustomer implements Customer{
    giveDiscount(): number {
        return 10;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent
    }
}
class goldCustomer implements Customer{
    giveDiscount(): number {
        return 30;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent*3; 
    }
}
class Discount{
    giveDiscount(customer:Customer){
        return customer.giveDiscount();
    }
}

let premiumcustomer=new premiumCustomer();
let discount=new Discount();

console.log(discount.giveDiscount(premiumcustomer));
