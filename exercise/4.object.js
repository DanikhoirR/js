var smartWatch = {
  merk: "apple watch",
  time: 1,
  pulse: 60,
  temperature: 34,
  footstep: 1270,
  date: (d = new Date()),
  getParameterTime: function () {
    if (this.time >= 5 && this.time <= 10) {
      return "Morning";
    } else if (this.time >= 11 && this.time <= 18) {
      return "AfterNoon";
    } else if (this.time >= 18 && this.time <= 24) {
      return "Night";
    } else if (this.time >= 1 && this.time <= 4) {
      return "Night";
    } else {
      return "Undifined";
    }
  },
  getCountingPulse: function () {
    if (this.pulse >= 60 && this.pulse <= 100) {
      return "Normal";
    } else {
      return "Tidak normal, segera periksa";
    }
  },
  getParameterTemperature: function () {
    if (this.temperature >= 16 && this.temperature <= 23) {
      return "Dingin";
    } else if (this.temperature >= 24 && this.temperature <= 28) {
      return "Sejuk";
    } else if (this.temperature >= 29 && this.temperature <= 31) {
      return "Hangat";
    } else if (this.temperature >= 32 && this.temperature <= 38) {
      return "Panas";
    } else {
      return "tidak teridentifikasi";
    }
  },
  currentDate: function () {
    let dd = this.date.getDate();
    let mm = this.date.getMonth();
    let yyyy = this.date.getFullYear();
    return (this.date = `${dd}/${mm}/${yyyy}`);
  },
  converterStepToKm: function () {
    let convToM = this.footstep * 0.76;
    let convToKm = convToM / 1000;
    return convToKm;
  },
};

console.log(smartWatch.getParameterTime());
console.log(smartWatch.getCountingPulse());
console.log(smartWatch.getParameterTemperature());
console.log(smartWatch.currentDate());
console.log(smartWatch.converterStepToKm());
