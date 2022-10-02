function Store() {}
Store.prototype.payment = function (pay) {
  if (pay == true) {
    this.checkout = "done";
    this.door = "open";
  }
};
