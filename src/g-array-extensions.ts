interface Array<T> {
    toMap<K, V>(keySelector: CallbackFn<T, K>, valueSelector: CallbackFn<T, V>): Map<K, V>;
}


((proto) => {
    proto.toMap = function toMap<T, K, V>(this: Array<T>, keySelector: CallbackFn<T, K>, valueSelector: CallbackFn<T, V>): Map<K, V> {
        const map = new Map<K, V>();

        this.forEach((item, index, array) => {
            const key = keySelector(item, index, array);
            const value = valueSelector(item, index, array);
            map.set(key, value);
        });

        return map;
    }
})(Array.prototype);