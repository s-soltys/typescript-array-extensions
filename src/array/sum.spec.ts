import './sum';

describe("Array.sum", () => {
    it("should be callable", () => {
        let arr = [1, 2, 3];
        let out = arr.sum(x => x);

        expect(out).toBe(6);
    });
});