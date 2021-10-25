class TV {
  constructor(brand, channel, volume) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }

  lower(number) {
    if (this.volume < 100) {
      this.volume += 1;
    }
  }

  turnUp(volume) {
    this.volume -= volume;

    if (this.volume <= 0) {
      this.volume = 0;
    }
  }

  changeChannelTV(channel) {
    if (channel > 0 && channel < 50) {
      this.channel = channel;
    }
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

const samsungTV = new TV('Samsung');
samsungTV.describe();
samsungTV.reset();
samsungTV.describe();

