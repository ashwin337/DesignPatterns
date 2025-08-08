// class CustomArrayIterator<T>{
//     private position:number=0;
//     constructor(private collection:T[]){}

//     public next():T{
//         const result=this.collection[this.position]
//         this.position+=1;
//         return result;
//     }

//     public hasNext():boolean{
//         return this.position<this.collection.length;
//     }
// }

// const array=[1,2,3,4,5]

// const it=new CustomArrayIterator(array);
// console.log(it.hasNext());
// console.log(it.next());
// console.log(it.next());


// const array2=["1",2,3,4,5]

// const it2=new CustomArrayIterator(array2);
// console.log(it.hasNext());
// console.log(it.next());
// console.log(it.next());

interface MyIterator<T>{
    next():MyIteratorResult<T>;
    hasNext():boolean;
}

interface Collection<T>{
    createIterator():MyIterator<T>
}

interface MyIteratorResult<T>{
    value:T|null;
    done:boolean;
}

class User{
    constructor(public name:string){}
}

class UserCollection implements Collection<User>{
    constructor(private users:User[]){}
    createIterator(): MyIterator<User> {
        return new UserIterator(this)
    }
    getItems(){
        return this.users
    }
}

class UserIterator implements MyIterator<User>{
    private position=0;
    constructor(private collection:UserCollection){}
    next(): MyIteratorResult<User> {
        if(this.hasNext()){
            
            const res= {value:this.collection.getItems()[this.position],done:false}
            this.position+=1;
            return res;
        }
        else{
            return {value:null,done:true}
        }
    }
    hasNext(): boolean {
        return this.position<this.collection.getItems().length;
    }
}

const uc=new UserCollection([new User("u1"),new User("u2"),new User("u3")]);
const it:MyIterator<User>=uc.createIterator()

while(it.hasNext()){
    console.log(it.next());
}