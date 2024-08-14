var hp = {
  merk: "Ekopon",
  notification: true,
  volume: "50%",
  brigthness: "50%",
  thrash: "104mb",
  batery: 39,
  getNotificationDnd: function () {
    this.notification = false;
    return "Do not Distrub";
  },
  getRiseTheBrightness: function () {
    return (this.brigthness = "100%");
  },
  getTurnDownVolume: function () {
    return (this.volume = "0%");
  },
  getDeleteThrash: function () {
    return (this.thrash = "0mb");
  },
  getModeBatterySaving: function () {
    if (this.batery < 40) {
      return "yellow";
    } else {
      return "green";
    }
  },
};

console.log(hp.getNotificationDnd());
console.log(hp.getRiseTheBrightness());
console.log(hp.getTurnDownVolume());
console.log(hp.getDeleteThrash());
console.log(hp.getModeBatterySaving());