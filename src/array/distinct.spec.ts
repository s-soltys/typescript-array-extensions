import './distinct';

describe("Array.distinct should", () => {
    it("work on empty array", () => {
        let arr: number[] = [];
        let out = arr.distinct()
        expect(out.length).toBe(0);
    });

    it("work on number arrays", () => {
        let arr = [4, 4, 4, 13, 0, 15, 4];
        let out = arr.distinct();
        expect(out).toEqual([4, 13, 0, 15]);
    });

    it("work on string arrays", () => {
        let arr = ['4', '4', '4', '13', '0', '15', '4'];
        let out = arr.distinct();
        expect(out).toEqual(['4', '13', '0', '15']);
    });

    it("work with object property picker", () => {
        let arr = ['1', '22', '33', '4', '5555'];
        let out = arr.distinct(str => str.length);
        expect(out).toEqual(['1', '22', '5555']);
    });

    it("work with mixed arrays", () => {
        let arr = ['string', '', null, null, 23, { x: 13 }, { x: 13 }, NaN, NaN, undefined, undefined];
        let out = arr.distinct();
        expect(out).toEqual(['string', '', null, 23, { x: 13 }, { x: 13 }, NaN, NaN, undefined]);
    });
});