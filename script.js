//complete this code
class Animal {
	  private _species:string;
    
    constructor (species:string){
        this._species = species;
    }

    get species():string{
        return`The ${this._species} of the animal`;
    }
    
    makeSound():void{
          console.log(`The ${this._species} makes a sound`);
    }
}

class Dog extends Animal {
	 purr():void{
      console.log("purr");
    }
}

class Cat extends Animal {
	 bark(): void{
      console.log("woof");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
