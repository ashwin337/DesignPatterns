interface Subject{
    registerObserver(o: Observer):void;
    removeObserver(o:Observer):void;
    notifyObservers():void;
}
 
interface Observer{
    update(temperature:number|undefined,humidity:number|undefined,pressure:number|undefined):void
}
 
class WeatherData implements Subject{
    private observers:Observer[]=[]
    private temperature:number|undefined
    private humidity:number|undefined
    private pressure:number|undefined
 
    registerObserver(o: Observer): void {
        o.update(this.temperature,this.humidity,this.pressure)
        this.observers.push(o)
    }
    removeObserver(o: Observer): void {
        let x=this.observers.indexOf(o);
        if(x==-1){
            console.log("Observer not found");
            return;
        }
        this.observers.splice(x,1);
        console.log("Observer removed");
        return;
    }
    notifyObservers(): void {
        this.observers.forEach((observer)=>observer.update(this.temperature,this.humidity,this.pressure))
    }
 
    setMeasurement( temperature:number, humidity:number, pressure:number):void{
        this.temperature=temperature;
        this.humidity=humidity;
        this.pressure=pressure
        this.notifyObservers()
        return;
    }
}
 
class CurrentConditionsDisplay implements Observer{
      private temperature:number|undefined
    private humidity:number|undefined
    private pressure:number|undefined
    constructor(private subject:Subject){
        this.subject.registerObserver(this);
    }
    update(temperature: number | undefined, humidity: number | undefined, pressure: number | undefined): void {
         this.temperature=temperature;
        this.humidity=humidity;
        this.pressure=pressure;
        return;
    }
 
    display(){
        if (this.temperature !== undefined && this.humidity !== undefined) {
      console.log(
        `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
      );
    } else {
      console.log("Weather data is not available");
    }      
    }
}

const wd=new WeatherData();

wd.setMeasurement(1,2,3);
const obs=new CurrentConditionsDisplay(wd);

obs.display()

wd.setMeasurement(5,6,7);
obs.display()
