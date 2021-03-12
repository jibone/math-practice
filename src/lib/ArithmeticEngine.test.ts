import ArithmeticEngine from "./ArithmeticEngine";

describe("ArithmeticEngine.new", () => {
  it("Initialize with the addition operation", () => {
    const aEngine = new ArithmeticEngine("addition");

    expect(aEngine.operation.name).toEqual("addition");
    expect(aEngine.operation.symbol).toEqual("+");
    expect(aEngine.numbers).toEqual(2);
    expect(aEngine.minNumber).toEqual(1);
    expect(aEngine.maxNumber).toEqual(10);
  });

  it("Initialize with the subtraction operation", () => {
    const aEngine = new ArithmeticEngine("subtraction");

    expect(aEngine.operation.name).toEqual("subtraction");
    expect(aEngine.operation.symbol).toEqual("-");
  });

  it("Initialize with the multiplication operation", () => {
    const aEngine = new ArithmeticEngine("multiplication");

    expect(aEngine.operation.name).toEqual("multiplication");
    expect(aEngine.operation.symbol).toEqual("×");
  });

  it("Initialize with the division operation", () => {
    const aEngine = new ArithmeticEngine("division");

    expect(aEngine.operation.name).toEqual("division");
    expect(aEngine.operation.symbol).toEqual("÷");
  });
});

describe("Arithmetic errors", () => {
  describe("when numbers is less than 2", () => {
    it("throw error", () => {
      expect(() => {
        new ArithmeticEngine("addition", 1);
      }).toThrowError();
    });
  });

  describe("when maxNumber is lesser than minNumber", () => {
    it("thow error", () => {
      expect(() => {
        new ArithmeticEngine("subtraction", 2, 9, 2);
      }).toThrowError();
    });
  });
});
