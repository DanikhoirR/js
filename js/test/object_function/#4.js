const pw = "#admin123";
var pc = {
  merk: "Asus",
  price: 20000000,
  display: true,
  wifi: false,
  turnOnDisplay: function () {
    if (this.display == true) {
      return "Display Login";
    } else if (this.display == false) {
      return "the screen doesn't display anything";
    } else {
      return "broken";
    }
  },
  loginPage: function () {
    if (pw == "#admin123") {
      return "login succesfull";
    } else {
      return "please try again";
    }
  },
  connectWifi: function () {
    if (this.wifi == true) {
      return "Conected";
    } else if (this.wifi == false) {
      return "Not Conected";
    } else {
      return "your pc is error";
    }
  },
};

console.log(pc.turnOnDisplay());
console.log(pc.loginPage());
console.log(pc.connectWifi());