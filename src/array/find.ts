interface Array<T> {
    find(callbackFn: (value: T, index: number, array: T[]) => boolean): T | undefined;
}

((proto) => {
    if (typeof proto.find === "function") return;
    
    proto.find = function find<T>(this: Array<T>, callbackFn: (value: T, index: number, array: T[]) => boolean): T | undefined {
        let result: T | undefined = undefined;

        this.some((value, index, array) => {
            let isFound = callbackFn(value, index, array);

            if (isFound) {
                result = value;
            }

            return isFound;
        });

        return result;
    }
})(Array.prototype);