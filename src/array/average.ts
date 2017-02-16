interface Array<T> {
    average(callbackFn: CallbackFn<T, number>): number;
}

((proto) => {
    proto.average = function average<T>(this: Array<T>, callbackFn: CallbackFn<T, number>): number {
        return this.sum(callbackFn) / (this.length || 1);
    }
})(Array.prototype);