export default({})

// interface Shape{
//     area():number;
//     perimeter():number;
// }

// class Circle implements Shape{
//     constructor(private radius:number){}

//     area(): number {
//         return Math.PI*this.radius*this.radius
//     }
//     perimeter(): number {
//         return Math.PI*this.radius*2
//     }
// }

// class Reactangle implements Shape{
//     constructor (private width:number,private length:number){}

//     area(): number {
//         return this.length*this.width
//     }
//     perimeter(): number {
//         return 2*(this.length+this.width)
//     }
// }


// function getShapeArea(shape:Shape){
//     return shape.area();
// }

// console.log(getShapeArea(new Circle(5)));
// console.log(getShapeArea(new Reactangle(3,4)));

const date=new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());

