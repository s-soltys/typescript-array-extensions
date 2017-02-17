import './scan';

describe("Array.scan should", () => {
    it("work on empty array", () => {
        let arr: number[] = [];
        let out = arr.scan((acc, x) => acc + x, 0);
        expect(out.length).toBe(0);
    });

    it("return the initial value when acc is not combined with the current value", () => {
        let arr = [100, 13, 5675, 'xxx'];
        let out = arr.scan((acc, x) => acc, 'Y');
        expect(out).toEqual(['Y', 'Y', 'Y', 'Y']);
    });

    it("create an array of previous values sum with 0 initial value", () => {
        let arr: number[] = [1, 2, 3];
        let out = arr.scan((acc, x) => acc + x, 0);
        expect(out).toEqual([1, 3, 6]);
    });

    it("create an array of previous values sum with non-zero initial value", () => {
        let arr: number[] = [2, 3, 10, 1];
        let out = arr.scan((acc, x) => acc + x, 1000);
        expect(out).toEqual([1002, 1005, 1015, 1016]);
    });

    it("scan an array of values", () => {
        let arr = [{ tag: 'x', val: 1 }, { tag: 'A', val: 10 }, { tag: 'yyy', val: 5}];
        let out = arr.scan((acc, x) => {
            return { tag: acc.tag + x.tag, val: acc.val + x.val };
        }, { tag: '', val: 0 });

        expect(out).toEqual([{ tag: 'x', val: 1 }, { tag: 'xA', val: 11 }, { tag: 'xAyyy', val: 16 }]);
    });
});