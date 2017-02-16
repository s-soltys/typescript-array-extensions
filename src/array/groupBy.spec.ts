import './groupBy';

describe("Array.groupBy", () => {
    it("should group by string key", () => {
        let original = [5, 5, 1];
        let out = original.groupBy(x => 'k' + x) as any;

        expect(out.get('k1')).toEqual([1]);
        expect(out.get('k5')).toEqual([5, 5]);
    });

    it("should group by number key", () => {
        let original = [5, 5, 1];
        let out = original.groupBy(x => 2 * x);

        expect(out.get(2)).toEqual([1]);
        expect(out.get(10)).toEqual([5, 5]);
    });
});
