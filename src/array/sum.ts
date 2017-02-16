interface Array<T> {
    sum(callbackFn: (value: T, index: number, array: T[]) => number): number;
}

((proto) => {
    proto.sum = function sum<T>(this: Array<T>, callbackFn: (value: T, index: number, array: T[]) => number): number {
        return this.reduce((sum, value, currentIndex, array) => sum + callbackFn(value, currentIndex, array), 0);
    }
})(Array.prototype);