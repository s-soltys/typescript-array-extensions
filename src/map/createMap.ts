interface Array<T> {
    createMap<K, V>(keySelector: (value: T, index: number, array: T[]) => K, valueSelector: (value: T, index: number, array: T[]) => V): Map<K, V>;
}

((proto) => {
    proto.createMap = function createMap<T, K, V>(this: Array<T>, keySelector: (value: T, index: number, array: T[]) => K, valueSelector: (value: T, index: number, array: T[]) => V): Map<K, V> {
        const map = new Map<K, V>();

        this.forEach((item, index, array) => {
            const key = keySelector(item, index, array);
            const value = valueSelector(item, index, array);
            map.set(key, value);
        });

        return map;
    }
})(Array.prototype);