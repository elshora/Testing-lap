describe("Temp", function () {
  var temp;
  beforeEach(function () {
    temp = new Temp();
  });
  it("Is the Swich Off", function () {
    temp.test(17);
    expect(temp.isSwichON).toBeFalsy();
  });
  it("Is the Swich On", function () {
    temp.test(22);
    expect(temp.isSwichON).toBeTruthy();
  });
});
