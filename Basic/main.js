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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, jobtitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobtitle = jobtitle;
    }
    Person.prototype.name = function () {
        return "My name is " + this.firstName + " " + this.lastName + ", I am a " + this.lastName;
    };
    return Person;
}());
// let fullname = new Person("Ahmed", "Abdelaal", "Developer");
// console.log(fullname.name());
var Extra = /** @class */ (function (_super) {
    __extends(Extra, _super);
    function Extra(firstName, lastName, jobtitle, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, jobtitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Extra.prototype.name = function () {
        return _super.prototype.name.call(this) + ", I earn " + this.salary + " and I work in " + this.jobLocation; // ⑤
    };
    return Extra;
}(Person));
var fullname = new Extra("Ahmed", "Abdelaal", "Developer", 1800, "Vienna");
console.log(fullname.name());
