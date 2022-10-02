function Car() {}
Car.prototype.speed = function (read) {
  let level;
  let type;
  if (read < 0 || 220 < read) {
    this.level = "inValid";
  } else if (read >= 0 && read < 40) {
    this.level = "Low";
  } else if (read >= 40 && read < 120) {
    this.level = "Normal";
  } else if (120 <= read && read < 200) {
    this.level = "High";
  } else if (200 <= read && read < 220) {
    this.level = "V.High";
  }
};
