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




