function SortingNumberInBackOrder (array) {
    for (let i = 0; i < array.length; i++) {
        if (i%2==0) {
            for (let j = i+1; j < array.length; j++) {
                if (array[j]<array[i]) {
                    let temp=array[i];
                    array[i]=array[j];
                    array[j]=temp;
                }
            }
        }
        else {
            for (let j = i+1; j < array.length; j++) {
                if (array[j]>array[i]) {
                    let temp=array[i];
                    array[i]=array[j];
                    array[j]=temp;
                }
            }
        }
    }
    return array;
}

SortingNumberInBackOrder([1, 65, 3, 52, 48, 63, 31, -3, 18, 56] )