interface Button{
    render():void;
    onClick(f:Function):void;
}

interface Checkbox{
    render():void;
    toggle():void
}

interface GUIFactory{
    createButton():Button;
    createCheckbox(button:Button):Checkbox;
}

class WindowsButton implements Button{
    render(): void {
        console.log("windows button render");
    }
    onClick(f: Function): void {
        console.log("Windows button was clicked");
        f();
    }
}

class WindowsCheckbox implements Checkbox{
    constructor(private button:Button){}

      render(): void {
        console.log("windows checkbox render");
    }

    toggle(): void {
        this.button.onClick(()=>{console.log("Windows checkbox");
        })
    }
}

class MacButton implements Button{
    render(): void {
        console.log("mac button render");
    }
    onClick(f: Function): void {
        console.log("mac button was clicked");
        f();
    }
}

class MacCheckbox implements Checkbox{
    constructor(private button:Button){}

      render(): void {
        console.log("mac checkbox render");
    }

    toggle(): void {
        this.button.onClick(()=>{console.log("mac checkbox");
        })
    }
}

class WindowsFactory implements GUIFactory{
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(button: Button): Checkbox {
        return new WindowsCheckbox(button)
    }
}

class MacFactory implements GUIFactory{
    createButton(): Button {
        return new MacButton();
    }
    createCheckbox(button: Button): Checkbox {
        return new MacCheckbox(button)
    }
}

function renderUI(factory:GUIFactory){
    const button=factory.createButton();
    const checkbox=factory.createCheckbox(button)

    button.render();
    checkbox.render();

    button.onClick(()=>{
        console.log("button clicked");
        
    })
    checkbox.toggle();
}

renderUI(new WindowsFactory())