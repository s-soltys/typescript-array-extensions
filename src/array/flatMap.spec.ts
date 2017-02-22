import './flatMap';

describe("Array.flatMap should", () => {
    it("map empty array", () => {
        let arr: number[][] = [];
        let out = arr.flatMap(x => x);

        expect(out.length).toBe(0);
    });

    it("map string into characters", () => {
        let arr = ['abc'];
        let out = arr.flatMap(x => x.split(''));

        expect(out.length).toBe(3);
        expect(out).toEqual(['a', 'b', 'c']);
    });

    it("map array of arrays into separate items", () => {
        let arr = [{ array: [1] }, { array: [5, 6, 13] }, { array: [2, 3] }];
        let out = arr.flatMap(x => x.array);

        expect(out.length).toBe(6);
        expect(out).toEqual([1, 5, 6, 13, 2, 3]);
    });
});
