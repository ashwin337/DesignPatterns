interface Tool{
    onMouseDown():void;
    onMouseUp():void;
}

class Canvas implements Tool{
    constructor(private tool:Tool){}

    setTool(tool:Tool){
        this.tool=tool;
    }
    onMouseDown(){
        this.tool.onMouseDown()
    }
    onMouseUp(){
        this.tool.onMouseUp();
    }
}

class SelectionTool implements Tool{
    onMouseDown(): void {
        console.log("selection started");
    }
    onMouseUp(): void {
        console.log("selected");
        
    }
}

class BrushTool implements Tool{
    onMouseDown(): void {
        console.log("brush started");
    }
    onMouseUp(): void {
        console.log("brush completed");
    }
}

class EraserTool implements Tool{
    onMouseDown(): void {
        console.log("started erasing");
    }
    onMouseUp(): void {
        console.log("erased");
    }
}

let cv=new Canvas(new BrushTool());
cv.onMouseDown();
cv.onMouseUp();
cv.setTool(new EraserTool())