import './sortBy';

describe("Array.sortBy", () => {
    it("should be callable", () => {
        let original = [3, 2, 1];
        let out = original.sortBy(x => x);

        expect(original).toEqual([3, 2, 1]);
        expect(out).toEqual([1, 2, 3]);
    });
});
