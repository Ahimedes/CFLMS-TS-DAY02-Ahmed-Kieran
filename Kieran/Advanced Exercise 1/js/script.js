"use strict";
class Vehicles {
    constructor(brand, model, colour, mpg, used) {
        this.brand = brand;
        this.model = model;
        this.colour = colour;
        this.mpg = mpg;
        this.used = used;
    }
}
class Motor extends Vehicles {
    constructor(brand, model, colour, mpg, used, performanceModel, kilometersLeft, numOfSeats, fuelType, productionYear) {
        super(brand, model, colour, mpg, used);
        this.performanceModel = performanceModel;
        this.kilometersLeft = kilometersLeft;
        this.numOfSeats = numOfSeats;
        this.fuelType = fuelType;
        this.productionYear = productionYear;
        vehicles.push(this);
    }
    getPrice() {
        return this.performanceModel * this.productionYear + this.kilometersLeft + this.numOfSeats;
    }
}
class Truck extends Vehicles {
    constructor(brand, model, colour, mpg, used, performanceModel, kilometersLeft, numOfSeats, fuelType, productionYear) {
        super(brand, model, colour, mpg, used);
        this.performanceModel = performanceModel;
        this.kilometersLeft = kilometersLeft;
        this.numOfSeats = numOfSeats;
        this.fuelType = fuelType;
        this.productionYear = productionYear;
        vehicles.push(this);
    }
    getPrice() {
        return this.performanceModel * this.productionYear + this.kilometersLeft * this.numOfSeats;
    }
}
// Adding an array to store the individual objects in
let vehicles = new Array();
// Adding 4 new Vehicle objects
const car1 = new Motor("Mazda", "swift", "red", 12, false, 5, 1200, 5, "diesel", 2018);
const car2 = new Motor("Toyota", "newton", "blue", 25, true, 8, 2500, 5, "hybrid", 2020);
const car3 = new Truck("Landrover", "traveller", "green", 6, false, 3, 800, 3, "petrol", 2012);
const car4 = new Truck("GMC", "hunter", "silver", 7, true, 3, 5200, 3, "diesel", 2017);
console.table(vehicles);
// Iterating through the list of figures and attaching an onclick listener to them
for (let i = 0; i < vehicles.length; i++) {
    $(`#car${i + 1}`).on("click", function () {
        $(this).find(".figure-caption").text(`€${vehicles[i].getPrice()}`);
    });
}
