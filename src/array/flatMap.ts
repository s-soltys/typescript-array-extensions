interface Array<T> {
    flatMap<T, R>(this: T[], callbackFn: CallbackFn<T, R[]>): R[];
}

((proto) => {
    proto.flatMap = function flatMap<T, R>(this: T[], callbackFn: CallbackFn<T, R[]>): R[] {
        let arrays = this.map(callbackFn);
        let result = Array.prototype.concat(...arrays);
        return result;
    }
})(Array.prototype);