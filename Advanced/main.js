var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [];
var Vehicle = /** @class */ (function () {
    function Vehicle(Brand, Topspeed, Type) {
        this.Brand = Brand;
        this.Topspeed = Topspeed;
        this.Type = Type;
        arr.push(this);
    }
    Vehicle.prototype.name = function () {
        return "This is a " + this.Brand + ", of the type " + this.Type + " and the Topspeed is " + this.Topspeed + " km/h";
    };
    return Vehicle;
}());
// let newcar = new Vehicle("BMW", 180, "i-3");
// console.log(newcar.name());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(Brand, Topspeed, Type, performancemodel, kilometersleft, numberseats, fueltype, productionyear) {
        var _this = _super.call(this, Brand, Topspeed, Type) || this;
        _this.performancemodel = performancemodel;
        _this.kilometersleft = kilometersleft;
        _this.numberseats = numberseats;
        _this.fueltype = fueltype;
        _this.productionyear = productionyear;
        return _this;
    }
    Motor.prototype.name = function () {
        return _super.prototype.name.call(this) + ", it is a " + this.performancemodel + " - model and has " + this.kilometersleft + " kms left. It has " + this.numberseats + " seats, drives on " + this.fueltype + " and was produced in " + this.productionyear;
    };
    Motor.prototype.price = function () {
        return this.kilometersleft + this.numberseats + this.Topspeed;
    };
    return Motor;
}(Vehicle));
var BMW = new Motor("BMW", 180, "i-3", "Sport", 100000, 5, "Diesel", 2009);
console.log(BMW.name());
console.log(BMW.price());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(Brand, Topspeed, Type, performancemodel, kilometersleft, numberseats, fueltype, productionyear) {
        var _this = _super.call(this, Brand, Topspeed, Type) || this;
        _this.performancemodel = performancemodel;
        _this.kilometersleft = kilometersleft;
        _this.numberseats = numberseats;
        _this.fueltype = fueltype;
        _this.productionyear = productionyear;
        return _this;
    }
    Truck.prototype.name = function () {
        return _super.prototype.name.call(this) + ", it is a " + this.performancemodel + " - model and has " + this.kilometersleft + " kms left. It has " + this.numberseats + " seats, drives on " + this.fueltype + " and was produced in " + this.productionyear;
    };
    Truck.prototype.price = function () {
        return this.kilometersleft + this.numberseats + this.Topspeed;
    };
    return Truck;
}(Vehicle));
var Mercedes = new Truck("Mercedes", 240, "Truck", "Lame", 120000, 5, "Diesel", 2009);
console.log(Mercedes.name());
console.log(Mercedes.price());
var btns = document.getElementsByClassName("btnEvent");
var _loop_1 = function (i) {
    btns[i].addEventListener("click", function () {
        document.getElementById("result").innerHTML = (arr[i].price());
    });
};
for (var i = 0; i < btns.length; i++) {
    _loop_1(i);
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
