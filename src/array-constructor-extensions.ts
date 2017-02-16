interface ArrayConstructor {
    zip<T, F, Y>(leftArray: T[], rightArray: F[], merge: (left: T, right: F) => Y): Y[];
}

((arrayConstructor: any) => {
    arrayConstructor.zip = function zip<T, F, Y>(leftArray: T[], rightArray: F[], merge: (left: T, right: F) => Y): Y[] {
        let result = new Array<Y>(leftArray.length)

        for (let i = 0; i < leftArray.length; i++) {
            result[i] = merge(leftArray[i], rightArray[i]);
        }
        
        return result;
    }
})(Array);