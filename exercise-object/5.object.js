var hp = {
  merk: "Ekopon",
  notification: true,
  volume: 50,
  brigthness: "50",
  trash: "104mb",
  batery: 39,
  setNotificationDNd: function () {
    this.notification = false;
    return "Do not Distrub";
  },
  getRiseTheBrightness: function () {
    return (this.brigthness = "100%");
  },
  setVolume: function (type, value) {
    if (type == "up") {
      return `${(this.volume = this.volume + value)}%`;
    } else if (type == "down") {
      return `${(this.volume = this.volume - value)}%`;
    } else {
      return "Unknwon Type";
    }
  },
  getDeleteTrash: function () {
    return (this.trash = "0mb");
  },
  getModeBatterySaving: function () {
    if (this.batery < 40) {
      return "yellow";
    } else {
      return "green";
    }
  },
};

console.log(hp.setNotificationDNd());
console.log(hp.getRiseTheBrightness());
console.log(hp.setVolume("up", 5));
console.log(hp.getDeleteTrash());
console.log(hp.getModeBatterySaving());
