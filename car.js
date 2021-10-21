class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  // method 1 accélerer
  accelerate(number) {
    this.speed += number;
  }

  // method 2 freiner
  brake(number) {
    this.speed -= number;
  }

  describe() {
    console.log(`${this.brand} running at ${this.speed} km/h`);
  }
}

const ford = new Car('ford', 0);
// console.log(ford);
ford.accelerate(100);
// console.log(ford);
ford.brake(25);
ford.describe();
// console.log(ford);

const peugeot = new Car('peugeot', 0);
peugeot.accelerate(500);
peugeot.brake(400);
peugeot.describe(400);
console.log(peugeot);

class TV {
  constructor(brand, channel, volume) {
      this.brand = brand;
      this.channel = 1;
      this.volume = 50;
  }

  lower(number) {
    this.volume = number >= 0;
  }

  turnUp(number) {
    this.volume = number <= 100;
  }

  changeChannelTV(number) {
    this.channel <= 50;
  }

  reset() {
    this.channel = 1;
    this.volume = 50;
  }

  describe() {
    console.log(`This ${this.brand}TV is at ${this.channel} channel, and its volume sound is at ${this.volume}`);
  }
}

const samsungTV = new TV('samsung', 23, 47);
samsungTV.describe();
samsungTV.reset();
samsungTV.describe();
samsungTV.();