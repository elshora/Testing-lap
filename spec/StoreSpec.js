describe("Store", function () {
  var store;

  beforeEach(function () {
    store = new Store();
  });

  it("is the checkout done", function () {
    store.payment(true);
    expect(store.checkout).toBe("done");
    expect(store.door).toBe("open");
  });
});
