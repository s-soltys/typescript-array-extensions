type Callback<T, Y> = (item: T, currentIndex: number, array: Array<T>) => Y;

interface Array<T> {
    flatMap<T, R>(this: T[], callbackFn: Callback<T, R[]>): R[];
    toMap<K, V>(keySelector: Callback<T, K>, valueSelector: Callback<T, V>): Map<K, V>;
    group<G>(callbackFn: Callback<T, G>): Map<G, Array<T>>;
    average(callbackFn: Callback<T, number>): number;
    sum(callbackFn: Callback<T, number>): number;
    sortBy(callbackFn: (item: T) => number): Array<T>;
    find(callbackFn: Callback<T, boolean>): T | null;
}


(() => {
    const arrayPrototype: any = Array.prototype;

    arrayPrototype.flatMap = function flatMap<T, R>(this: T[], callbackFn: Callback<T, R[]>): R[] {
        let arrays = this.map(callbackFn);
        let result = Array.prototype.concat(...arrays);
        return result;
    }

    arrayPrototype.toMap = function toMap<T, K, V>(this: Array<T>, keySelector: Callback<T, K>, valueSelector: Callback<T, V>): Map<K, V> {
        const map = new Map<K, V>();

        this.forEach((item, index, array) => {
            const key = keySelector(item, index, array);
            const value = valueSelector(item, index, array);
            map.set(key, value);
        });

        return map;
    }

    arrayPrototype.group = function group<T, G>(this: Array<T>, callbackFn: Callback<T, G>): Map<G, Array<T>> {
        const map = new Map<G, Array<T>>();

        this.forEach((item, currentIndex, array) => {
            const key = callbackFn(item, currentIndex, array);

            const targetArray = map.get(key) || [];
            targetArray.push(item);
            map.set(key, targetArray);
        });

        return map;
    }

    arrayPrototype.average = function average<T>(this: Array<T>, callbackFn: Callback<T, number>): number {
        return this.sum(callbackFn) / (this.length || 1);
    }

    arrayPrototype.sum = function sum<T>(this: Array<T>, callbackFn: Callback<T, number>): number {
        return this.reduce((sum, value, currentIndex, array) => sum + callbackFn(value, currentIndex, array), 0);
    }

    arrayPrototype.sortBy = function sum<T>(this: Array<T>, callbackFn: (item: T) => number): Array<T> {
        return this.slice().sort((a, b) => callbackFn(a) - callbackFn(b));
    }

    arrayPrototype.find = function find<T>(this: Array<T>, callbackFn: Callback<T, boolean>): T | null {
        let result: T | null = null;

        this.some((value, index, array) => {
            let isFound = callbackFn(value, index, array);

            if (isFound) {
                result = value;
            }

            return isFound;
        });

        return result;
    }
})();