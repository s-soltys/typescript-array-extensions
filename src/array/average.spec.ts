import './average';

describe("Array.average should", () => {
    it("count average in empty array", () => {
        let arr = [];
        let out = arr.average(x => x);
        expect(out).toBe(0);
    });

    it("count average in array of numbers", () => {
        let arr = [1, 2, 3];
        let out = arr.average(x => x);
        expect(out).toBe(2);
    });

    it("count average in array of numbers without a callbackFn", () => {
        let arr = [10, 12, 20];
        let out = arr.average();
        expect(out).toBe(14);
    });

    it("count average in array of objects without a callbackFn", () => {
        let arr = [{ v: 1 }, { v: 3 }, { v: 10 }];
        let out = arr.average();
        expect(out).toEqual(NaN);
    });

    it("count average in array of objects", () => {
        let arr = [{ v: 2 }, { v: 6 }, { v: 10 }];
        let out = arr.average(x => x.v);
        expect(out).toBe(6);
    });
});