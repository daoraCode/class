class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate(number) {
    this.speed += number;
  }
  brake(number) {
    this.speed -= number;
  }
  describe() {
    console.log(`${this.brand} running at ${this.speed} km/h`);
  }
}

const ford = new Car('ford', 0);
ford.accelerate(100);
ford.brake(25);
// ford.describe();

const peugeot = new Car('peugeot', 0);
peugeot.accelerate(200);
peugeot.brake(100);
// peugeot.describe();





class TV {
  constructor(brand, channel, volume) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
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
    console.log(
      `This ${this.brand}TV is at ${this.channel} channel, and the sound volume is at ${this.volume}`
    );
  }
}

const samsungTV = new TV('samsung', 23, 47);

samsungTV.describe();
samsungTV.reset();
samsungTV.describe();
