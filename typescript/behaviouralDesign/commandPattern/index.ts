// interface ICommand{
//     execute():void;
//     undo():void;
// }

// class Light{
//     turnOn():void{
//         console.log("Light is on");
//     }
//     turnOff():void{
//         console.log("Light is off");
//     }
// }

// class TurnOnCommand implements ICommand{
//     constructor(private light:Light){}

//     execute(): void {
//         this.light.turnOn()
//     }
//     undo(): void {
//         this.light.turnOff();
//     }
// }

// class TurnOffCommand implements ICommand{
//     constructor(private light:Light){}

//     execute(): void {
//         this.light.turnOff()
//     }
//     undo(): void {
//         this.light.turnOn();
//     }
// }

// class SimpleRemoteControl{
//     private currCommand!:ICommand;
//     private undoCommand!:ICommand;
//     private commandQueue:ICommand[]=[]

//     setCommand(command:ICommand){
//         this.undoCommand=this.currCommand;
//         this.currCommand=command;
//         this.commandQueue.push(command)
//     }

//     buttonWasPressed(){
//         if(this.commandQueue.length){
//             const command=this.commandQueue.shift();
//             command?.execute();
//         }
//     }

//     undoButtonWasPressed(){
//         this.undoCommand.execute();
//     }

//     hasCommands():boolean{
//         return this.commandQueue.length>0;
//     }
// }

// const remote:SimpleRemoteControl=new SimpleRemoteControl();
// const light:Light=new Light();

// remote.setCommand(new TurnOnCommand(light));
// remote.buttonWasPressed();

// remote.setCommand(new TurnOffCommand(light));
// remote.buttonWasPressed();

// remote.undoButtonWasPressed();


interface ICommand{
    execute():void;
    undo():void;
}

class createFileCommand implements ICommand{
    constructor(private path:string){};

    execute(): void {
        console.log(`file was created at ${this.path}`);
    }
    undo(): void {
        console.log(`file deleted from ${this.path}`);
    }
}
class deleteFileCommand implements ICommand{
    constructor(private path:string){};

    undo(): void {
        console.log(`file was created at ${this.path}`);
    }
    execute(): void {
        console.log(`file deleted from ${this.path}`);
    }
}

class updateFileCommand implements ICommand{
    constructor(private path:string,private newContent:string,private oldContent:string){}

    execute() {
    console.log(`Updating file at ${this.path} with new content: ${this.newContent}`);
    }
    undo() {
    console.log(`Reverting file at ${this.path} to old content: ${this.oldContent}`);
    }
}

class ReadFileCommand implements ICommand {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  execute() {
    console.log(`Reading file at ${this.path}`);
  }
  undo() {
    console.log(`Undo operation not available for reading file at ${this.path}`);
  }
}

class MyFileSystem{
    private commandQueue:ICommand[]=[];

    addCommand(command:ICommand){
        this.commandQueue.push(command)
    }
    executeCommand(){
        this.commandQueue.shift()?.execute();
    }
    undoCommand(){
        this.commandQueue.pop()?.undo();
    }
    hasCommand(){
        return this.commandQueue.length>0
    }
}

const fs=new MyFileSystem();
fs.addCommand(new createFileCommand('/desktop/abc.txt'))
fs.addCommand(new createFileCommand('/desktop/abce.txt'))
fs.addCommand(new createFileCommand('/desktop/abdc.txt'))


while(fs.hasCommand()){
    fs.executeCommand()
}
fs.undoCommand();
