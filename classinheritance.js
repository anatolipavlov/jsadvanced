class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log(`Hi, I am ${this.name} and I am ${this.age} years old \n`);
	}
}

class Manager extends Person {
	constructor(name, age, managed){
		super(name, age);
		this.managed = managed;
	}

	greet() {
		super.greet();
		console.log(`I manage ${this.managed.map(element => element.name)}`);
	}
}

class Developer extends Person {
	constructor(name, age, skillset){
		super(name, age);
		this.skillset = skillset;
	}

	greet() {
		super.greet();
		console.log(`I know ${this.skillset}`);
	}
}

/* ----------------------------- Create Objects ----------------------------- */
// Developer instances
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instances
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

/* ----------------------------- Use the objects ---------------------------- */
maria.greet();
pesho.greet();
gates.greet();