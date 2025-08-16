class Animal {
    private _species;

    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make sound
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

class Cat extends Animal {
   constructor(species) {
	   super(species);
   }

    // Cat-specific method
    purr() {
        console.log("purr");
    }
}

class Dog extends Animal {
	constructor(species) {
		super(species);
	}

    // Dog-specific method
    bark() {
        console.log("woof");
    }
}

// Do not change the code below this line
(window as any).Animal = Animal;
(window as any).Cat = Cat;
(window as any).Dog = Dog;

