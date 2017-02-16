interface Array<T> {
    sum(callbackFn: CallbackFn<T, number>): number;
}

((proto) => {
    proto.sum = function sum<T>(this: Array<T>, callbackFn: CallbackFn<T, number>): number {
        return this.reduce((sum, value, currentIndex, array) => sum + callbackFn(value, currentIndex, array), 0);
    }
})(Array.prototype);