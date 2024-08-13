const disc = 10 / 100;
const tax = 5 / 100;

var ac = {
  merk: "daikin",
  price: 7000000,
  power: false,
  getPriceAfterDiscount: function () {
    return this.price - this.price * disc;
  },
  taxCounter: function () {
    return this.getPriceAfterDiscount() * tax;
  },
  totalPrice: function () {
    return this.getPriceAfterDiscount() + this.taxCounter();
  },

  turnOn: function () {
    this.power = true;
    return "On";
  },

  turnOff: function () {
    this.power = false;
    return "off";
  },
};

console.log(`Rp.${ac.getPriceAfterDiscount()}`);
console.log(`Rp.${ac.taxCounter()}`);
console.log(`Rp.${ac.totalPrice()}`);
console.log(`${ac.turnOn()}`);
console.log(`${ac.turnOff()}`);
console.log(ac.power);