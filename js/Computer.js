export default class Computer {
    //setter
    setName(name) {
        this.mName = name;
    }
    setBrand(brand) {
        this.mBrand = brand;
    }
    //getter
    getName() {
        console.log("My name is Senghor" + this.mName);
    }
    getBrand() {
        console.log("This is brand new" + this.mBrand);
    }
    //Behavior
    display() {
        console.log("This is display of checking");
    }
}