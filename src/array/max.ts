interface Array<T> {
    max(): number;
    max(callbackFn: (value: T, index: number, array: T[]) => number): T;
}

((proto: any) => {
    if (typeof proto.max === "function") return;
    
    proto.max = function max<T>(this: Array<T>, callbackFn: (value: T, index: number, array: T[]) => number): T {
        if (!callbackFn) {
            callbackFn = (t: T) => t as any;
        }

        let maxValue: number = Number.NEGATIVE_INFINITY;
        let result: T;

        this.forEach((value, index, array) => {
            let v = callbackFn(value, index, array);

            if (v >= maxValue){
                maxValue = v;
                result = value;
            }
        });

        return result;
    }
})(Array.prototype);