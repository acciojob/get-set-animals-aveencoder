class Animal {
    private _species: string;

    constructor(species: string) {
        this._species = species;
    }

    // Getter for species
    get species(): string {
        return this._species;
    }

    // Method to make sound
    makeSound(): void {
        console.log(`The ${this._species} makes a sound`);
    }
}

class Cat extends Animal {
   constructor(species) {
	   super(species);
   }

    // Cat-specific method
    purr(): void {
        console.log("purr");
    }
}

class Dog extends Animal {
	constructor(species) {
		super(species);
	}

    // Dog-specific method
    bark(): void {
        console.log("woof");
    }
}

// Do not change the code below this line
(window as any).Animal = Animal;
(window as any).Cat = Cat;
(window as any).Dog = Dog;

