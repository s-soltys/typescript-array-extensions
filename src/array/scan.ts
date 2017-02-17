interface Array<T> {
    scan<A>(callbackFn: (acc: A, value: T, index: number, array: T[]) => A, initialValue: A): A[];
}

((proto: any) => {
    if (typeof proto.scan === "function") return;
    
    proto.scan = function scan<T, A>(this: T[], callbackFn: (acc: A, value: T, index: number, array: T[]) => A, initialValue: A): A[] {
        let result = new Array<A>(this.length);
        let acc = initialValue;

        this.forEach((value, index, array) => {
            result[index] = acc = callbackFn(acc, value, index, array);
        });

        return result;
    }
})(Array.prototype);