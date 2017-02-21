interface Array<T> {
    distinct(): T[];
    distinct(callbackFn: (value: T, index: number, array: T[]) => any): T[];
}

((proto: any) => {
    if (typeof proto.distinct === "function") return;
    
    proto.distinct = function distinct<T>(this: Array<T>, callbackFn?: (value: T, index: number, array: T[]) => any): T[] {
        if (!callbackFn) {
            callbackFn = (x: T) => x;
        }

        let existing: any[] = [];

        let filtered = this.filter((value, index, array) => {
            let key = callbackFn(value, index, array);

            let isUnique = existing.indexOf(key) < 0;

            if (isUnique){
                existing.push(key);
            }

            return isUnique;
        });

        return filtered;
    }
})(Array.prototype);