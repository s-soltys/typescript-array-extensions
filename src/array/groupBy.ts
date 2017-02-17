interface Array<T> {
    groupBy(callbackFn: (value: T, index: number, array: T[]) => number): Map<number, T[]>;
    groupBy(callbackFn: (value: T, index: number, array: T[]) => string): Map<string, T[]>;
}
((proto) => {
    if (typeof proto.groupBy === "function") return;
    
    proto.groupBy = function groupBy<T, G>(this: T[], callbackFn: (value: T, index: number, array: T[]) => G): Map<G, T[]> {
        const map = new Map<G, T[]>();

        this.forEach((item, currentIndex, array) => {
            const key = callbackFn(item, currentIndex, array);

            const targetArray = map.get(key) || [];
            targetArray.push(item);
            map.set(key, targetArray);
        });

        return map;
    }
})(Array.prototype);