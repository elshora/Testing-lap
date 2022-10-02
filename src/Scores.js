function Scores() {}
Scores.prototype.score = function (score) {
  let level;
  if (score < 0) {
    this.level = "inValid";
  } else if (0 <= score && score < 50) {
    this.level = "Failed";
  } else if (score >= 50 && score < 65) {
    this.level = "Passed";
  } else if (65 <= score && score < 75) {
    this.level = "Good";
  } else if (75 <= score && score < 85) {
    this.level = "V.Good";
  } else if (85 <= score && score < 100) {
    this.level = "Excellent";
  } else if (score > 100) {
    this.level = "In";
  }
};
