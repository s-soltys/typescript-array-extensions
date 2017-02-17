interface Array<T> {
    average(): number;
    average(callbackFn: (value: T, index: number, array: T[]) => number): number;
}

((proto: any) => {
    proto.average = function average<T>(this: Array<T>, callbackFn: (value: T, index: number, array: T[]) => number): number {
        return this.sum(callbackFn) / (this.length || 1);
    }
})(Array.prototype);