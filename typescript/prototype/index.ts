// interface UserDetails {
//   name: string;
//   age: number;
//   email: string;
// }

// interface Prototype {
//   clone(): Prototype;

//   getUserDetails(): UserDetails;
// }

// class ConcretePrototype implements Prototype {
//   private user: UserDetails;

//   constructor(user: UserDetails) {
//     this.user = user;
//   }

//   public clone(): ConcretePrototype {
//     const clone = Object.create(this);
//     clone.user = { ...this.user };
//     return clone;
//   }

//   public getUserDetails(): UserDetails {
//     return this.user;
//   }
// }

// function clientCode() {
//   const p1 = new ConcretePrototype({
//     name: "John",
//     age: 30,
//     email: "john@example.com",
//   });
//   const p2 = p1.clone();

//   if (p1.getUserDetails() === p2.getUserDetails()) {
//     console.log("Cloned objects are the same instance.");
//   } else {
//     console.log("Cloned objects are not the same instance.");
//   }
// }

// clientCode();

interface ShapeProperties{
    color:string;
    x:number;
    y:number;
}

abstract class Shape{
    constructor(public properties:ShapeProperties){}
    public abstract clone():Shape
}

class Rectangle extends Shape{
    constructor(public properties:ShapeProperties,public width:number,public height:number){
        super(properties)
    }

    public clone():Rectangle {
        const o1=new Rectangle({...this.properties},this.width,this.height)
        return o1;
    }
}

class Circle extends Shape{
    constructor(public properties:ShapeProperties,public radius:number){
        super(properties)
    }
    public clone():Circle{
       const o1=new Circle({...this.properties},this.radius)
        return o1;
    }
}

let redRectangle: Shape = new Rectangle({ color: "red", x: 0, y: 0 }, 10, 20);

let anotherRedRectangle: Shape = redRectangle.clone();

anotherRedRectangle.properties.color = "blue";

console.log(redRectangle);
console.log(anotherRedRectangle);