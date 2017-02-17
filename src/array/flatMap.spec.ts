import './flatMap';

describe("Array.flatMap should", () => {
    it("should be callable", () => {
        let arr = ['abc'];
        let out = arr.flatMap(x => x.split(''));

        expect(out.length).toBe(3);
        expect(out).toEqual(['a', 'b', 'c']);
    });
});
