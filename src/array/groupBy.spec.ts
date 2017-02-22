import 'core-js/es6/map';
import './groupBy';

describe("Array.groupBy should", () => {
    it("should group by empty array", () => {
        let original: { name: string, value: number }[] = [];
        let out = original.groupBy(x => x.name);

        expect(out.size).toEqual(0);
    });

    it("should group by string key", () => {
        let original = [5, 5, 1];
        let out = original.groupBy(x => 'k' + x);

        expect(out.size).toEqual(2);
        expect(out.get('k1')).toEqual([1]);
        expect(out.get('k5')).toEqual([5, 5]);
    });

    it("should group by number key", () => {
        let original = [5, 5, 1];
        let out = original.groupBy(x => 2 * x);

        expect(out.size).toEqual(2);
        expect(out.get(2)).toEqual([1]);
        expect(out.get(10)).toEqual([5, 5]);
    });

    it("should objects by string key", () => {
        let original = [{ name: 'groupA', value: 13 }, { name: 'groupB', value: 1200 }, { name: 'groupA', value: -1 }];
        let out = original.groupBy(x => x.name);

        expect(out.size).toEqual(2);
        expect(out.get('groupA')).toEqual([{ name: 'groupA', value: 13 }, { name: 'groupA', value: -1 }]);
        expect(out.get('groupB')).toEqual([{ name: 'groupB', value: 1200 }]);
    });
});
