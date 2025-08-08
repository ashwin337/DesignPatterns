interface FilterStrategy{
    apply(image:string):void;
}

class GrayscaleStrategy implements FilterStrategy{
        apply(image: string): void {
            console.log("Grayscale Image",image);
        }
}

class SepiaStrategy implements FilterStrategy{
    apply(image: string): void {
        console.log("Sepia Image",image);
    }
}

class NegativeStrategy implements FilterStrategy{
    apply(image: string): void {
        console.log("Negative Image",image);
    }
}

class ImageProcessor{
    private strategy:FilterStrategy;

    setFilterStrategy(strategy:FilterStrategy):void{
        this.strategy=strategy;
    }
    applyFilter(image:string):void{
        this.strategy.apply(image);
    }
}

const ip=new ImageProcessor();
ip.setFilterStrategy(new GrayscaleStrategy())
ip.applyFilter("img1")
ip.setFilterStrategy(new SepiaStrategy())
ip.applyFilter("img2")
ip.setFilterStrategy(new NegativeStrategy())
ip.applyFilter("img3")