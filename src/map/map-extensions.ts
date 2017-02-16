interface Map<K, V> {
    getValuesArray(): Array<V>;
    mapToFlatArray<Z>(selector: (value: V, key: K) => Z): Array<Z>;
    remapValues<Z>(selector: (value: V, key: K) => Z): Map<K, Z>;
}

(() => {
    const mapPrototype: any = Map.prototype;
    
    mapPrototype.mapToFlatArray = function mapToFlatArray<K, V, Z>(this: Map<K, V>, selector: (value: V, key: K) => Z): Array<Z> {
        let result = new Array<Z>(this.size);

        let index = 0;
        this.forEach((value, key) => {
            result[index++] = selector(value, key);
        });

        return result;
    }

    mapPrototype.remapValues = function remapValues<K, V, Z>(this: Map<K, V>, selector: (value: V, key: K) => Z): Map<K, Z> {
        let outMap = new Map<K, Z>();

        this.forEach((value, key) => {
            outMap.set(key, selector(value, key));
        });

        return outMap;
    }

    mapPrototype.getValuesArray = function getValuesArray<K, V>(this: Map<K, V>): Array<V> {
        let result = new Array<V>(this.size);

        let index = 0;
        this.forEach(value => {
            result[index++] = value;
        });

        return result;
    }
})();