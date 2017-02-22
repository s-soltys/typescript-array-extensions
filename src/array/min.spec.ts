import './min';

describe("Array.min should", () => {
    it("work with an empty array", () => {
        let arr = [];
        let out = arr.min();
        expect(out).toBeUndefined();
    });

    it("count min in array of numbers", () => {
        let arr = [1, 2, 3, 0, -1];
        let out = arr.min(x => x);
        expect(out).toBe(-1);
    });

    it("count min in array of numbers without a callbackFn", () => {
        let arr = [10, 30, 12, 20, NaN];
        let out = arr.min();
        expect(out).toBe(10);
    });

    it("count min in array of objects without a callbackFn", () => {
        let arr = [{ v: 1 }, { v: 3 }, { v: 10 }];
        let out = arr.min();
        expect(out).toBeUndefined();
    });

    it("count min in array of objects with a callbackFn", () => {
        let arr = [{ v: 15 }, { v: 9 }, { v: 10 }];
        let out = arr.min(x => x.v);
        expect(out).toEqual({ v: 9 });
    });

    it("count min in array of strings with a callbackFn", () => {
        let arr = ["zzz", "a", "bbbb"];
        let out = arr.min(str => str.length);
        expect(out).toBe("a");
    });
});