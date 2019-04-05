class Animal {
  constructor (hungry = false, sick = false, age = 0, restLevel = 5) {
    this.hungry = hungry;
    this.sick = sick;
    this.age = age;
    this.restLevel = restLevel;
  }

  feed() {
    if (this.needRest() === false) {
      if (this.hungry === true) {
        return 'That was yummy!';
      } else {
        this.hungry = true;
        return 'No thanks, I\'m full';
      }
    } else {
      return this.sleep();
    }
  }

  sleep() {
    if (this.restLevel < 1) {
      this.restLevel = 5;
      return `I'm too sleepy. Goodnight...`;
    } else {
      return `I'm not sleepy yet...`;
    }
  }

  medicate() {
    if (this.sick === true) {
      this.sick = false;
      return 'I feel much better!';
    } else {
      this.sick = true;
      return 'No thanks, I feel fine';
    }
  }

  increaseAge() {
    this.age += 1;
    return `Happy Birthday to me! I am ${this.age} years old!`;
  }

  needRest() {
    if (this.restLevel >= 1) {
      this.restLevel -= 1;
      return false;
    }
  }
}

class Cat extends Animal {
  constructor(hungry, sick, age, restLevel, feed, sleep, medicate, increaseAge, needRest, furry = true) {
    super(hungry, sick, age, restLevel, feed, sleep, medicate, increaseAge, needRest);
    this.furry = furry;
  }

  // Cat Specific Methods
  meow() {
    if (this.needRest() === false) {
      return 'Meow!';
    } else {
      return this.sleep();
    }
  }

  useLitterBox() {
    if (this.needRest() === false) {
      return 'Buried Treasure!';
    } else {
      return this.sleep();
    }
  }
}

class Dog extends Animal {
  constructor(hungry, sick, age, restLevel, feed, sleep, medicate, increaseAge, needRest, breed = 'Collie') {
    super(hungry, sick, age, restLevel, feed, sleep, medicate, increaseAge, needRest);
    this.breed = breed;
  }

  // Dog Specific Methods
  bark() {
    if (this.needRest() === false) {
      return 'ruff ruff';
    } else {
      return this.sleep();
    }
  }

  goOutside() {
    if (this.needRest() === false) {
      return 'I own that tree now!';
    } else {
      return this.sleep();
    }
  }
}

class Fish extends Animal {
  constructor(hungry, sick, age, restLevel, feed, sleep, medicate, increaseAge, needRest, fishType = 'Salmon', kosher = true) {
    super(hungry, sick, age, restLevel, feed, sleep, medicate, increaseAge, needRest);
    this.fishType = fishType;
    this.kosher = kosher;
  }

  // Fish Specific Methods
  swim() {
    if (this.needRest() === false) {
      return 'Just keep swimming...';
    } else {
      return this.sleep();
    }
  }
}

const cat = new Cat();
const dog = new Dog();
const fish = new Fish();

/* Feed the dog twice */
console.log(dog.feed());
console.log(dog.feed());

// /* Increase the dog's age twice */
console.log(dog.increaseAge());
console.log(dog.increaseAge());

// /* Make the dog bark */
console.log(dog.bark());
console.log(dog.bark());
console.log(dog.bark());
console.log(dog.bark());
console.log(dog.bark());

// /* Make the dog go outside */
console.log(dog.goOutside());

// /* Make the cat meow */
console.log(cat.meow());

// /* Make the cat sleep */
console.log(cat.sleep());

// /* Make the cat use the litter box */
console.log(cat.useLitterBox());

// /* Give the fish medicine twice */
console.log(fish.medicate());
console.log(fish.medicate());

// /* Make the fish swim */
console.log(fish.swim());
console.log(fish.swim());
console.log(fish.swim());
console.log(fish.swim());
console.log(fish.swim());
console.log(fish.swim());
console.log(fish.swim());

/* Instructions
Tamagotchi Version 1.0
Make a tamagotchi object. Give it the following properties:

a hungry property (initially false)
a sick property (initially false)
an age of 0
a rest level (initally set to 5)
Give it the following methods:

feed() - if hungry is true, return "That was yummy!" and set hungry to false. If hungry is false, return "No thanks, I'm full." and set hungry to true.
sleep() - returns "zzzzzzz" (use as many z's as you want) and increase rest level
medicate() - if sick is true, return "I feel much better!" and set sick to false. If sick is false, return "No thanks, I feel fine." and set sick to true.
increaseAge() - increase the age by one and return "Happy Birthday to me! I am " + age + " years old!"
We are going to build a three custom tamagotchi objects:
Use your custom tamagotchi object... to create each of these

dog
cat
fish
dog should be the same as tamagotchi except it should have this additional property:
a breed property (set this this to a breed of your choice)
and also have these functions:
bark() - returns "ruff ruff
goOutside() - returns "I own that tree now!"
cat should be the same as tamagotchi except it should have this additional property:
a furry property (initially true)
and also have these functions:
meow() - returns "Meow!"
useLitterBox() - returns "Burried treasure!"
fish should be the same as tamagotchi except it should have this additional property:
a fishType property (initially set to salmon)
a kosher property (initially true)
and also have these functions:
swim() - returns "Just keep swimming..."
Try the following:

Feed the dog twice.
Increase the dog's age twice.
Make the dog bark.
Make the dog go outside.
Make the cat meow.
Make the cat sleep.
Make the cat use the litter box.
Give the fish medicine twice.
Make the fish swim
*/

