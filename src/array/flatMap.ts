interface Array<T> {
    flatMap<R>(callbackFn: (value: T, index: number, array: T[]) => R[]): R[];
}

((proto) => {
    proto.flatMap = function flatMap<T, R>(this: T[], callbackFn: (value: T, index: number, array: T[]) => R[]): R[] {
        let arrays = this.map(callbackFn);
        let result = Array.prototype.concat(...arrays);
        return result;
    }
})(Array.prototype);