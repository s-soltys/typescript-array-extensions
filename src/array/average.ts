interface Array<T> {
    average(): number;
    average(callbackFn: (value: T, index: number, array: T[]) => number): number;
}

((proto: any) => {
    if (typeof proto.average === "function") return;
    
    proto.average = function average<T>(this: Array<T>, callbackFn: (value: T, index: number, array: T[]) => number): number {
        return this.sum(callbackFn) / (this.length || 1);
    }
})(Array.prototype);