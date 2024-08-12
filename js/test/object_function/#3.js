var salesCar = {
  merk: "BMW",
  discount: 5 / 100,
  tax: 7 / 100,
  engine: false,
  getDetailsProduct: function () {
    var detail = {
      type: "X1",
      price: 250000000,
      speed: "180km/h",
      gas: "V-Power",
    };
    return `type  : ${detail.type}
gas   : ${detail.gas}
price : Rp. ${detail.price}`;
  },
  engineOnOff: function () {
    if (this.engine == true) {
      return "vremmmm vremm vremm";
    } else if (this.engine == false) {
      return "this engine is off";
    } else {
      return "broken engine";
    }
  },
};

console.log(salesCar.getDetailsProduct());
console.log(salesCar.engineOnOff());
