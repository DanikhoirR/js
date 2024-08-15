var siswa = {
  name: "dani",
  scoreSemester: [80, 84, 88, 90, 92, 94],
  scoreAttitude: 80,
  finalTestScore: 90,
  getAverageScore: function () {
    let sum = this.scoreSemester.reduce((acc, curr) => acc + curr, 0);
    return (average = sum / this.scoreSemester.length);
  },
  getPresentToAchievementPath: function () {
    if (this.getAverageScore() >= 85) {
      return "85% - 90% masuk ptn favorit";
    } else if (this.getAverageScore() >= 70) {
      return "70% - 80% masuk ptn favorit";
    } else {
      return "50% masuk ptn favorit";
    }
  },
  getFinalScore: function () {
    return (
      (((this.scoreAttitude * 40) / 100 + (this.getAverageScore() * 60) / 100) *
        60) /
        100 +
      (this.finalTestScore * 40) / 100
    );
  },
  getPredicate: function () {
    if (this.getFinalScore() >= 90) {
      return "Predikat A";
    } else if (this.getFinalScore() >= 77) {
      return "Predikat B";
    } else {
      return "Predikat C";
    }
  },
  getGradute: function () {
    if (this.finalTestScore > 70) {
      return "lulus";
    } else {
      return "tidak lulus";
    }
  },
};

console.log(siswa.getAverageScore());
console.log(siswa.getPresentToAchievementPath());
console.log(siswa.getFinalScore());
console.log(siswa.getPredicate());
console.log(siswa.getGradute());
