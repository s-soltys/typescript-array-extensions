import './sortBy';

describe("Array.sortBy should", () => {
    it("sort empty array", () => {
        let original = [];
        let out = original.sortBy(x => x);

        expect(original).toEqual([]);
        expect(out).toEqual([]);
    });

    it("sort already sorted array", () => {
        let original = [1, 2, 3];
        let out = original.sortBy(x => x);

        expect(original).toEqual([1, 2, 3]);
        expect(out).toEqual([1, 2, 3]);
    });

    it("reverse sort array of numbers", () => {
        let original = [9, 5, 300];
        let out = original.sortBy(x => -x);

        expect(original).toEqual([9, 5, 300]);
        expect(out).toEqual([300, 9, 5]);
    });

    it("sort array of numbers", () => {
        let original = [3, 2, 2, 1, 2];
        let out = original.sortBy(x => x);

        expect(original).toEqual([3, 2, 2, 1, 2]);
        expect(out).toEqual([1, 2, 2, 2, 3]);
    });

    it("sort array of objects based on selector", () => {
        let original = ['xx', 'aaa', 'z'];
        let out = original.sortBy(x => x.length);

        expect(original).toEqual(['xx', 'aaa', 'z']);
        expect(out).toEqual(['z', 'xx', 'aaa']);
    });
});
