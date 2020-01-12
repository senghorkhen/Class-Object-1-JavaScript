import Computer from './Computer.js';
export class Dell extends Computer {
    //setter
    setColor(color){
        this.mColor = color;
    }
    //getter
    getColor() {
        console.log("This is your color");
    }
}