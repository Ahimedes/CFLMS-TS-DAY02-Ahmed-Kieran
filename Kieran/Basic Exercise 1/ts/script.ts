// interface Human {
//     name: string;
//     age: number;
//     jobTitle: string;
// }

class Person {
	name: string;
	age: number;
	jobTitle: string;

	constructor(name: string, age: number, jobTitle: string) {
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}

	hello() {
		return `Hello there, My name is ${this.name} and I am ${this.age} year(s) old, and I am a ${this.jobTitle}`;
	}
}

const person = new Person("kieran", 25, "programmer");

//person.hello();
console.log(person.hello);