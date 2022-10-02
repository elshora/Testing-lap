describe("Scores", function () {
  var scores;

  beforeEach(function () {
    scores = new Scores();
  });
  it("is student Level Invalid", function () {
    scores.score(-1);
    expect(scores.level).toBe("inValid");
  });
  it("is student Level Failed", function () {
    scores.score(5);
    expect(scores.level).toBe("Failed");
  });
  it("is student Level Passed", function () {
    scores.score(55);
    expect(scores.level).toBe("Passed");
  });
  it("is student Level Good", function () {
    scores.score(70);
    expect(scores.level).toBe("Good");
  });
  it("is student Level V.Good", function () {
    scores.score(80);
    expect(scores.level).toBe("V.Good");
  });
  it("is student Level Excellent", function () {
    scores.score(90);
    expect(scores.level).toBe("Excellent");
  });
  it("is student Level In", function () {
    scores.score(110);
    expect(scores.level).toBe("In");
  });
});
