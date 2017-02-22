import './max';

describe("Array.max should", () => {
    it("work with an empty array", () => {
        let arr = [];
        let out = arr.max();
        expect(out).toBeUndefined();
    });

    it("count max in array of numbers", () => {
        let arr = [1, 2, 3, 0, -1];
        let out = arr.max(x => x);
        expect(out).toBe(3);
    });

    it("count max in array of numbers without a callbackFn", () => {
        let arr = [10, 30, 12, 20, NaN];
        let out = arr.max();
        expect(out).toBe(30);
    });

    it("count max in array of objects without a callbackFn", () => {
        let arr = [{ v: 1 }, { v: 3 }, { v: 10 }];
        let out = arr.max();
        expect(out).toBeUndefined();
    });

    it("count max in array of objects with a callbackFn", () => {
        let arr = [{ v: 2 }, { v: 16 }, { v: 10 }];
        let out = arr.max(x => x.v);
        expect(out).toEqual({ v: 16 });
    });

    it("count max in array of strings with a callbackFn", () => {
        let arr = ["zzz", "a", "bbbb"];
        let out = arr.max(str => str.length);
        expect(out).toBe("bbbb");
    });
});