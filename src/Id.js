function Id() {}
Id.prototype.validate = function (num) {
  let cards = [1234, 1534, 1256, 1556, 1278, 1578];
  if (!cards.includes(num)) {
    this.valid = "inValid";
  }
};
Id.prototype.numLength = function (num) {
  if (num.lengths != 12) {
    this.len = "inValid";
  }
};
Id.prototype.specify = function (num) {
  let bank;
  let type;
  let a = Number(num.toString().split("").splice(0, 4).join(""));
  console.log(a);
  if (a === 1234) {
    this.bank = "Masr";
    this.type = "Debit";
  }
  if (a === 1534) {
    this.bank = "Masr";
    this.type = "Credit";
  }
  if (a === 1256) {
    this.bank = "CIB";
    this.type = "Debit";
  }
  if (a === 1556) {
    this.bank = "CIB";
    this.type = "Credit";
  }
  if (a === 1278) {
    this.bank = "ABID";
    this.type = "Debit";
  }
  if (a === 1578) {
    this.bank = "ABID";
    this.type = "Credit";
  }
};
