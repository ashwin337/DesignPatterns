interface FileSystemComponent{
    getName():string;
    getSize():number;
}

class FileComponent implements FileSystemComponent{
    constructor(private name:string,private size:number){}

    getName(): string {
        return this.name
    }
    getSize(): number {
        return this.size
    }
}

interface CompositeFileSystem extends FileSystemComponent{
    addComponent(component:FileSystemComponent):void;
    removeComponent(component:FileSystemComponent):void;
    getComponents():FileSystemComponent[]
}

class Folder implements CompositeFileSystem{
    constructor(private name:string,private components:FileSystemComponent[]){}

    getName(): string {
        return this.name
    }
    getSize(): number {
        return this.components.reduce((total,component)=>total+component.getSize(),0)
    }

    addComponent(component: FileSystemComponent): void {
        this.components.push(component)
    }
    removeComponent(component: FileSystemComponent): void {
        this.components=this.components.filter((c)=>c!==component);
    }
    getComponents(): FileSystemComponent[] {
        return this.components
    }
}

const fc=new FileComponent("txt",5);
const fc2=new FileComponent("txt2",5);
const fc3=new FileComponent("txt3",5);
const fc4=new FileComponent("txt4",5);

const fo=new Folder("f1",[])

fo.addComponent(fc)
fo.addComponent(fc2)
fo.addComponent(fc3)
fo.addComponent(fc4)
console.log(fo.getSize());

console.log(fo.getComponents());
fo.removeComponent(fc2)
console.log(fo.getComponents());