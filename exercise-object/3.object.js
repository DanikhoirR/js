const pw = "#admin123";
const wifi_1 = "admin1024";
const wifi_2 = "admin1025";
const wifi_3 = "admin1026";

var pc = {
  merk: "Asus",
  display: false,
  getTurnOnDisplay: function () {
    this.display = true;
    return "On";
  },
  getLoginPage: function () {
    if (pw == "#admin123") {
      return "login succesfull";
    } else {
      return "please try again";
    }
  },
  getWifiAvilable: function () {
    return "wifi_1, wifi_2, wifi_3";
  },
  getConectWifi_1: function () {
    if (wifi_1 == "admin1024") {
      return "Connected";
    } else {
      return "Wrong Password";
    }
  },
  getTurnOffDisplay: function () {
    this.display = false;
    return "Off";
  },
};

console.log(pc.getTurnOnDisplay());
console.log(pc.getLoginPage());
console.log(pc.getWifiAvilable());
console.log(pc.getConectWifi_1());
console.log(pc.getTurnOffDisplay());
