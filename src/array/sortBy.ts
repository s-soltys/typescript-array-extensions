interface Array<T> {
    sortBy(callbackFn: (value: T) => number): T[];
}

((proto) => {
    if (typeof proto.sortBy === "function") return;
    
    proto.sortBy = function sum<T>(this: T[], callbackFn: (value: T) => number): T[] {
        return this.slice().sort((a, b) => callbackFn(a) - callbackFn(b));
    }
})(Array.prototype);