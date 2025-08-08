abstract class DataParser{
    parseData(){
       this.loadData();
    const data = "sample data";
    const parsedData = this.parse(data);
    this.validate(parsedData);
    this.useData(parsedData);
    }
    protected loadData(){
        console.log("loading data");
    }
    protected validate(parsedData:any){
        console.log("validating data",parsedData);
    }
    protected useData(parseData:any){
        console.log("using data",parseData);
    }
    protected abstract parse(data:string):any;
}

class JSONParser extends DataParser {
  protected parse(data: string): any {
    console.log("Parsing data as JSON...");
    return "parsed json data"
  }
}

class XMLParser extends DataParser {
  protected parse(data: string): any {
    console.log("Parsing data as XML...");
    return "parsed xml data"
  }
}

function clientCode(dataParser: DataParser): void {
  dataParser.parseData();
}
clientCode(new JSONParser());

clientCode(new XMLParser());