function Temp() {}
Temp.prototype.test = function (tempDeg) {
  if (tempDeg < 18) this.isSwichON = false;
  if (tempDeg > 21) this.isSwichON = true;
};
