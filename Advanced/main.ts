let arr = []

class Vehicle {
    Brand: string;
    Topspeed: number;
    Type: any;
    constructor(Brand: string, Topspeed: number, Type: any) {
        this.Brand = Brand;
        this.Topspeed = Topspeed;
        this.Type = Type;

        arr.push(this);
    }
    name() {
        return `This is a ${this.Brand}, of the type ${this.Type} and the Topspeed is ${this.Topspeed} km/h`;
    }
}

// let newcar = new Vehicle("BMW", 180, "i-3");
// console.log(newcar.name());

class Motor extends Vehicle {
    performancemodel: any;
    kilometersleft: number;
    numberseats: number;
    fueltype: string;
    productionyear: number;

    constructor(Brand: string, Topspeed: number, Type: any, performancemodel: any, kilometersleft: number, numberseats: number, fueltype: string, productionyear: number) {
        super(Brand, Topspeed, Type);
        this.performancemodel = performancemodel;
        this.kilometersleft = kilometersleft;
        this.numberseats = numberseats;
        this.fueltype = fueltype;
        this.productionyear = productionyear;
    }

    name() {
        return `${super.name()}, it is a ${this.performancemodel} - model and has ${this.kilometersleft} kms left. It has ${this.numberseats} seats, drives on ${this.fueltype} and was produced in ${this.productionyear}`;
    }
    price() {
        return this.kilometersleft + this.numberseats + this.Topspeed
    }
}

let BMW = new Motor("BMW", 180, "i-3", "Sport", 100000, 5, "Diesel", 2009);
console.log(BMW.name())
console.log(BMW.price())

class Truck extends Vehicle {
    performancemodel: any;
    kilometersleft: number;
    numberseats: number;
    fueltype: string;
    productionyear: number;

    constructor(Brand: string, Topspeed: number, Type: any, performancemodel: any, kilometersleft: number, numberseats: number, fueltype: string, productionyear: number) {
        super(Brand, Topspeed, Type);
        this.performancemodel = performancemodel;
        this.kilometersleft = kilometersleft;
        this.numberseats = numberseats;
        this.fueltype = fueltype;
        this.productionyear = productionyear;

        
    }

    name() {
        return `${super.name()}, it is a ${this.performancemodel} - model and has ${this.kilometersleft} kms left. It has ${this.numberseats} seats, drives on ${this.fueltype} and was produced in ${this.productionyear}`;
    }
    price() {
        return this.kilometersleft + this.numberseats + this.Topspeed
    }
}

let Mercedes = new Truck("Mercedes", 240, "Truck", "Lame", 120000, 5, "Diesel", 2009);
console.log(Mercedes.name())
console.log(Mercedes.price())


const btns: any = document.getElementsByClassName("btnEvent");
for(let i = 0 ; i< btns.length; i++){
   btns[i].addEventListener("click", function(){
       document.getElementById("result").innerHTML = (arr[i].price()) 
    })
}


//  const mercBtn: any = (document.getElementById("#Mercedes") as HTMLElement);
//  mercBtn.addEventListener("click", function(){
//      console.log(Mercedes.price());
//  })



//  const btns: any = document.getElementsByClassName("btnEvent");
//  for(let i = 0 ; i< btns.length; i++){
//     btns[i].addEventListener("click", function(){
//         console.log(arr[i].price()) 
//      })
//  }
 