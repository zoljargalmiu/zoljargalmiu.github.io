describe("String.filter", () => {
  it("The function accepts an array of strings that specifies a list of banned words. It removes banned word 'not' from '\"This house is not nice!' and returning '\"This house is nice!'", () => {
    assert.strictEqual(
      '"This house is nice!',
      '"This house is not nice!'.filter("not")
    );
  });
});

describe("Array.bubbleSort", () => {
  it("Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted. [6, 4, 0, 3, -2, 1] => [-2, 0, 1, 3, 4, 6]", () => {
    it("[6, 4, 0, 3, -2, 1] => [-2, 0, 1, 3, 4, 6]", () => {
      expect([6, 4, 0, 3, -2, 1].bubbleSort()).to.have.same.members([
        -2, 0, 1, 3, 4, 6,
      ]);
    });
  });
});

// Exercise 3
describe("Teacher.prototype.teach", () => {
  it("Sophia is now teaching MPP", () => {
    const t1 = new Teacher();
    t1.initialize("Sophia", 34);
    assert.strictEqual(t1.teach("MPP"), "Sophia is now teaching MPP");
  });

  it("Zoloo is now teaching WAP", () => {
    const t1 = new Teacher();
    t1.initialize("Zoloo", 28);
    assert.strictEqual(t1.teach("WAP"), "Zoloo is now teaching WAP");
  });
});
