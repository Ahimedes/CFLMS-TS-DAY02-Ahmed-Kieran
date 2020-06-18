class Person {
    firstName: string;
    lastName: string;
    jobtitle: string;
    constructor(firstName: string, lastName: string, jobtitle: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobtitle = jobtitle;
    }
    name() {
        return `My name is ${this.firstName} ${this.lastName}, I am a ${this.lastName}`;
    }
}

//let fullname = new Person("Ahmed", "Abdelaal", "Developer");
// console.log(fullname.name());

class Extra extends Person { 
    salary: number; 
    jobLocation: string;
 
    constructor(firstName: string, lastName: string, jobtitle: string, salary: number, jobLocation: string) {
        super(firstName, lastName, jobtitle); 
         this.salary = salary;
         this.jobLocation = jobLocation;
    }
 
    name() { 
        return  `${super.name()}, I earn ${this.salary} and I work in ${this.jobLocation}`;
    }
 }

 let fullname = new Extra("Ahmed", "Abdelaal", "Developer", 1800, "Vienna");
 console.log(fullname.name());
