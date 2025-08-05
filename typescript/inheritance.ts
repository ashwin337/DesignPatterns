class Product{
    constructor(public id:string,public price:number,public description:string){}

    display(){
        console.log("product: ",this.id);
        
    }
}

class Book extends Product{
    constructor(public id:string,public price:number,public description:string,public author:string,public title:string){
        super(id,price,description)
    }
    display(): void {
        console.log("book: ",this.id);
    }
}

class Electronic extends Product{
     constructor(public id:string,public price:number,public description:string,public brand:string,public model:string){
        super(id,price,description)
    }
    display(): void {
        console.log("electronic: ",this.id);
    }
}

