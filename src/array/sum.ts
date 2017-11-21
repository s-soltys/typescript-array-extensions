interface Array<T> {
    sum(): number;
    sum(callbackFn: (value: T, index: number, array: T[]) => number): number;
}

((proto: any) => {
    if (typeof proto.sum === "function") return;

    proto.sum = function sum<T>(this: Array<T>, callbackFn: (value: T, index: number, array: T[]) => number): number {
        const callback = (typeof callbackFn === 'function') ? callbackFn : x => Number(x);
        return this.reduce((sum, value, currentIndex, array) => sum + callback(value, currentIndex, array), 0);
    }
})(Array.prototype);
