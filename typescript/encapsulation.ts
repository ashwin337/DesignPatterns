class BankAccount{
    private _balance:number;

    constructor(initialBalance:number){
        this._balance=initialBalance
    }

    public deposit(amount:number):void{
        if(amount<0){
            console.log("Invalid deposit amount");
            return;
        }
        this._balance+=amount;
    }

    public withdraw(amount:number):void{
          if(amount<0){
            console.log("Invalid deposit amount");
            return;
        }
        if(this._balance-amount<0){
            console.log("Insufficient Funds");
            return;
        }
        this._balance-=amount;
    }
    get balance(){
        return this._balance
    }
}

const myAccount=new BankAccount(1000)
myAccount.deposit(500)
myAccount.withdraw(200)
console.log(myAccount.balance)