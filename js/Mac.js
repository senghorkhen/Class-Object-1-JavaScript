import Computer from './Computer.js';
export class Mac extends Computer {
    //setter
    setPrice(price) {
        this.mPrice = price;
    }
    //getter
    getPrice() {
        console.log("This is your price of computer");
    }
}