interface Array<T> {
    sum(): number;
    sum(callbackFn: (value: T, index: number, array: T[]) => number): number;
}

((proto: any) => {
    proto.sum = function sum<T>(this: Array<T>, callbackFn: (value: T, index: number, array: T[]) => number): number {
        if (typeof callbackFn === 'function') {
            return this.reduce((sum, value, currentIndex, array) => sum + callbackFn(value, currentIndex, array), 0);
        } else {
            return this.reduce((sum, value) => sum + parseInt(value as any), 0);
        }
    }
})(Array.prototype);