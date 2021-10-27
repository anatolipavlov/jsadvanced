"use strict";
let devFactory = function(name, salary){
	let obj = {
		name: name,
		salary: salary,
		getSalary: () => obj.salary,
		increaseSalary: (incrValue, pass) => {
			if (pass === 'abracadabra') {
			   obj.salary += incrValue;
			} else {
				console.log(`Wrong password! ${obj.name} salary will not be increased!`);
			}
		}
	}
	return obj;
}

let dev1 = devFactory('Peter', 1000);
let dev2 = devFactory('Maria', 1200);

console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, 'abracadabra');
dev2.increaseSalary(100, '123');

console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);