describe("Car", function () {
  var car;

  beforeEach(function () {
    car = new Car();
  });
  it("is the speed invalid", function () {
    car.speed(-1);
    expect(car.level).toBe("inValid");
  });
  it("is the speed Low", function () {
    car.speed(5);
    expect(car.level).toBe("Low");
  });
  it("is the speed Normal", function () {
    car.speed(100);
    expect(car.level).toBe("Normal");
  });
  it("is the speed High", function () {
    car.speed(170);
    expect(car.level).toBe("High");
  });
  it("is the speed V.High", function () {
    car.speed(200);
    expect(car.level).toBe("V.High");
  });
  it("is the speed valid", function () {
    car.speed(250);
    expect(car.level).toBe("inValid");
  });
});
