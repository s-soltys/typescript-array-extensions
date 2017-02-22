import 'core-js/es6/map';
import './zip';

describe("Array.zip should", () => {
    it("zip empty arrays", () => {
        let out = Array.zip([], [], (l, r) => null);
        expect(out.length).toBe(0);
    });
    
    it("zip arrays of equal length", () => {
        let leftArr = [1, 2, 3, 4];
        let rightArr = ['a', 'b', 'c', 'd'];
        let out = Array.zip(leftArr, rightArr, (l, r) => [l, r] as [number, string]);
        expect(out.length).toBe(4);
        expect(out[0]).toEqual([1, 'a']);
        expect(out[1]).toEqual([2, 'b']);
        expect(out[2]).toEqual([3, 'c']);
        expect(out[3]).toEqual([4, 'd']);
    });
    
    it("zip arrays of unequal length", () => {
        let leftArr = [5, 6];
        let rightArr = ['a', 'b', 'c', 'd', 'array-too-long'];
        let out = Array.zip(leftArr, rightArr, (l, r) => [l, r] as [number, string]);
        expect(out.length).toBe(2);
        expect(out[0]).toEqual([5, 'a']);
        expect(out[1]).toEqual([6, 'b']);
    });
    
    it("zip when one of the arrays is empty", () => {
        let leftArr: number[] = [];
        let rightArr = ['a', 'b', 'c'];
        let out = Array.zip(leftArr, rightArr, (l, r) => [l, r] as [number, string]);
        expect(out.length).toBe(0);
    });
});