var siswa = {
  name: "dani", 
  lulus: true,
  scoreSemester:[80, 84, 88, 90, 92, 94],
  scoreAttitude: 80,
  finalTestScore: 90,
  getAverageScore: function() {
    let sum = this.scoreSemester.reduce((acc, curr) => acc + curr, 0);
    return average = sum / this.scoreSemester.length;
  },
  getPresentToAchievementPath: function() {
    if(this.getAverageScore() <= 99) {
      return "85% - 90% masuk ptn favorit";
    }else if(this.getAverageScore() <= 85) {
      return "70% - 65% masuk ptn favorit";
    }else{
      return "50% masuk ptn favorit";
    }
  },
  getFinalScore: function() {
    return (((this.scoreAttitude * 40/100) + (this.getAverageScore() * 60/100)) * 60/100) + (this.finalTestScore * 40/100);
  },
  getPredicate: function() {
    if(this.getFinalScore() <= 99) {
      return "Predikat A";
    }else if(this.getFinalScore() <= 85) {
      return "Predikat B";
    }else{
      return "Predikat C";
    }
  }
}

console.log(siswa.getAverageScore());
console.log(siswa.getPresentToAchievementPath());
console.log(siswa.getFinalScore());
console.log(siswa.getPredicate());