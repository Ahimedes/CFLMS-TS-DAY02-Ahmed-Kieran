class Person {
	name: string;
	age: number;
	jobTitle: string;
	salary: number;
	jobLocation: string;

	constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
		this.salary = salary;
		this.jobLocation = jobLocation;

		console.log(this);
	}

	hello() {
		return `Hello there, My name is ${this.name} and I am ${this.age} year(s) old, and I am a ${this.jobTitle}`;
	}

	myPay() {
		return `and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
	}
}

const person = new Person("kieran", 25, "programmer", 3000, "vienna");

console.log(person.hello());
console.log(person.myPay());
