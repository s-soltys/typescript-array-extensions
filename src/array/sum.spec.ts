import './sum';

describe("Array.sum should", () => {
    it("sum values in empty array", () => {
        let arr = [];
        let out = arr.sum(x => x);
        expect(out).toBe(0);
    });

    it("sum values in array of numbers", () => {
        let arr = [1, 2, 3];
        let out = arr.sum(x => x);
        expect(out).toBe(6);
    });

    it("sum values in array of numbers without a callbackFn", () => {
        let arr = [1, 2, 3];
        let out = arr.sum();
        expect(out).toBe(6);
    });

    it("sum values in array of objects without a callbackFn", () => {
        let arr = [{ v: 1 }, { v: 3 }, { v: 10 }];
        let out = arr.sum();
        expect(out).toEqual(NaN);
    });

    it("sum values in array of objects", () => {
        let arr = [{ v: 1 }, { v: 3 }, { v: 10 }];
        let out = arr.sum(x => x.v);
        expect(out).toBe(14);
    });
});