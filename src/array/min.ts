interface Array<T> {
    min(): number;
    min(callbackFn: (value: T, index: number, array: T[]) => number): T;
}

((proto: any) => {
    if (typeof proto.min === "function") return;
    
    proto.min = function min<T>(this: Array<T>, callbackFn: (value: T, index: number, array: T[]) => number): T {
        if (!callbackFn) {
            callbackFn = (t: T) => t as any;
        }

        let minValue: number = Number.POSITIVE_INFINITY;
        let result: T;

        this.forEach((value, index, array) => {
            let v = callbackFn(value, index, array);

            if (v <= minValue){
                minValue = v;
                result = value;
            }
        });

        return result;
    }
})(Array.prototype);