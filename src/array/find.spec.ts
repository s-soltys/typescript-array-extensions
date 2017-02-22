import './average';

describe("Array.find should", () => {
    it("not find a value in empty array of numbers", () => {
        let arr: number[] = [];
        let out = arr.find(x => x === 2);
        expect(out).toBeUndefined();
    });

    it("not find a non-existing value in an array of numbers", () => {
        let arr: number[] = [2, 3, 4, 7, 8, 9];
        let out = arr.find(x => x === 404);
        expect(out).toBeUndefined();
    });

    it("find an existing value in an array of numbers", () => {
        let arr: number[] = [2, 3, 4, 7, 8, 9];
        let out = arr.find(x => x === 7);
        expect(out).toBe(7);
    });

    it("find an existing value in an array of objects", () => {
        let arr = [{ id: '004', value: 'some value' }, { id: '005', value: 'other value' }];
        let out = arr.find(x => x.id === '005');
        expect(out).toEqual({ id: '005', value: 'other value' });
    });

    it("find an only the first value in an array of objects", () => {
        let arr = [{ id: '002', value: '...' }, { id: '004', value: 'EXPECTED' }, { id: '005', value: '...' }, { id: '004', value: 'should not be found' }];
        let out = arr.find(x => x.id === '004');
        expect(out).toEqual({ id: '004', value: 'EXPECTED' });
    });
});