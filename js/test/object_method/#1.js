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
    if (this.power == true) {
      return "On";
    } else {
      return "Off";
    }
  },

  turnOff: function () {
    if (this.power == false) {
      return "On";
    } else {
      return "Off";
    }
  },
};

console.log(`Rp.${ac.getPriceAfterDiscount()}`);
console.log(`Rp.${ac.taxCounter()}`);
console.log(`Rp.${ac.totalPrice()}`);
console.log(`${ac.turnOn()}`);
console.log(`${ac.turnOff()}`);
