class Amplifier{
    turnOn():void{
        console.log("Amplifier is up");
    }
    setVolume(level:number){
        console.log("Volume set to ",level);
    }
}

class DvdPlayer{
    turnOn():void{
        console.log("dvd player is up");
    }
    play(movie:string){
        console.log("Movie set to ",movie);
    }
}

class Projector{
    turnOn():void{
        console.log("Projector is up");
    }
    setinput(dvdplayer:DvdPlayer){
        console.log("input set");
    }
}

class Lights{
    dim(level:number){
        console.log("lights set to ",level);
        
    }
}

class HomeTheatrefacade{
    constructor(private amplifier:Amplifier,private dvdPlayer:DvdPlayer,private projector:Projector,private lights:Lights){}
    watchMovie(movie:string,Volume:number,light:number){
        this.amplifier.turnOn();
        this.amplifier.setVolume(Volume);
        this.dvdPlayer.turnOn();
        this.dvdPlayer.play(movie);
        this.projector.turnOn();
        this.projector.setinput(this.dvdPlayer)
        this.lights.dim(light);
    }
}

const amp=new Amplifier();
const dvd=new DvdPlayer();
const proj=new Projector();
const light=new Lights();
const ht=new HomeTheatrefacade(amp,dvd,proj,light);
ht.watchMovie('movie1',5,4);