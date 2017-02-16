import './average';

describe("Array.average", () => {
    it("should be callable", () => {
        let arr = [1, 2, 3];
        let out = arr.average(x => x);

        expect(out).toBe(2);
    });
});