// interface Builder {
//   setPartA(): void;
//   setPartB(): void;
//   setPartC(): void;
// }

// class ConcreteBuilder1 implements Builder {
//   private product!: Product1;
//   constructor() {
//     this.reset();
//   }
//   public reset(): void {
//     this.product = new Product1();
//   }
//   public setPartA(): void {
//     this.product.add("PartA1");
//   }
//   public setPartB(): void {
//     this.product.add("PartB1");
//   }
//   public setPartC(): void {
//     this.product.add("PartC1");
//   }
//   public getProduct(): Product1 {
//     const result = this.product;
//     this.reset();
//     return result;
//   }
// }

// class Product1 {
//   private parts: string[] = [];
//   public add(part: string): void {
//     this.parts.push(part);
//   }
//   public listParts(): void {
//     console.log(`Product parts: ${this.parts.join(", ")}`);
//   }
// }

// class Director {
//   private builder!: Builder;
//   public setBuilder(builder: Builder): void {
//     this.builder = builder;
//   }
//   public buildMinimalViableProduct(): void {
//     this.builder.setPartA();
//   }
//   public buildFullFeaturedProduct(): void {
//     this.builder.setPartA();
//     this.builder.setPartB();
//     this.builder.setPartC();
//   }
// }

// function clientCode(director: Director) {
//   const builder = new ConcreteBuilder1();
//   director.setBuilder(builder);
//   console.log("Standard basic product:");
//   director.buildMinimalViableProduct();
//   builder.getProduct().listParts();
//   console.log("Standard full featured product:");
//   director.buildFullFeaturedProduct();
//   builder.getProduct().listParts();

// //   // Remember, the Builder pattern can be used without a Director class.
// //   console.log("Custom product:");
// //   builder.setPartA();
// //   builder.setPartB();
// //   builder.getProduct().listParts();
// }

// const director = new Director();
// clientCode(director);

interface ICustomer{
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
}


class Customer implements ICustomer{
    constructor(public firstName:string,public lastName:string,public email:string,public phoneNumber:string){}
}
interface ICustomerBuilder{
    setFirstName(firstName:string):ICustomerBuilder
    setLastName(lastName:string):ICustomerBuilder
    setEmail(email:string):ICustomerBuilder
    setPhoneNumber(phoneNumber:string):ICustomerBuilder
    build():ICustomer
}

class customerBuilder implements ICustomerBuilder{
   private firstName:string="";
   private lastName:string="";
   private email:string="";
   private phoneNumber:string="";

   setFirstName(firstName: string): ICustomerBuilder {
       this.firstName=firstName;
       return this
   }
   setLastName(lastName: string): ICustomerBuilder {
       this.lastName=lastName
       return this
   }
   setEmail(email: string): ICustomerBuilder {
       this.email=email
       return this;
   }
   setPhoneNumber(phoneNumber: string): ICustomerBuilder {
       this.phoneNumber=phoneNumber
       return this
   }

   build(): ICustomer {
       return new Customer(this.firstName,this.lastName,this.email,this.phoneNumber)
   }
}

class CustomerDirector{
    constructor(private builder:ICustomerBuilder){}

    public buildMinimalCustomer(
        firstName:string,lastName:string,email:string
    ){
        return this.builder.setFirstName(firstName).setLastName(lastName).setEmail(email).build()
    }

}

const builder:ICustomerBuilder=new customerBuilder()
const director=new CustomerDirector(builder)
const customer:ICustomer=director.buildMinimalCustomer("john","doe","a@a.com")
console.log(customer);
