describe("Id", function () {
  var id;

  beforeEach(function () {
    id = new Id();
  });
  it("Is the number valid?", function () {
    id.validate(234);
    expect(id.valid).toBe("inValid");
  });
  it("Is the lenght 12", () => {
    id.numLength(2342313215);
    expect(id.len).toBe("inValid");
  });

  it("Is it belong to bank masr", function () {
    id.specify(1234123465479);
    expect(id.bank).toBe("Masr");
    expect(id.type).toBe("Debit");
  });
  it("Is it belong to bank masr", function () {
    id.specify(1534123465479);
    expect(id.bank).toBe("Masr");
    expect(id.type).toBe("Credit");
  });
  it("Is it belong to bank CIB", function () {
    id.specify(12565665476587);
    expect(id.bank).toBe("CIB");
    expect(id.type).toBe("Debit");
  });
  it("Is it belong to bank CIB", function () {
    id.specify(1556456456421321);
    expect(id.bank).toBe("CIB");
    expect(id.type).toBe("Credit");
  });
  it("Is it belong to bank ABID", function () {
    id.specify(12783456456456);
    expect(id.bank).toBe("ABID");
    expect(id.type).toBe("Debit");
  });
  it("Is it belong to bank ABID", function () {
    id.specify(1578213241654654);
    expect(id.bank).toBe("ABID");
    expect(id.type).toBe("Credit");
  });
});
