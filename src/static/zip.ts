interface ArrayConstructor {
    zip<T, F, Y>(leftArray: T[], rightArray: F[], merge: (left: T, right: F) => Y): Y[];
}

((arrayConstructor: any) => {
    if (typeof arrayConstructor.zip === "function") return;

    arrayConstructor.zip = function zip<T, F, Y>(leftArray: T[], rightArray: F[], merge: (left: T, right: F) => Y): Y[] {
        let outputLength = Math.min(leftArray.length, rightArray.length);

        let result = new Array<Y>(outputLength);

        for (let i = 0; i < outputLength; i++) {
            result[i] = merge(leftArray[i], rightArray[i]);
        }
        
        return result;
    }
})(Array);