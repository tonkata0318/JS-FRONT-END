function ArrayRotation (array,timestoRotate) {
    for (let i = 0; i < timestoRotate; i++) {
        let last = array.pop();
        array.unshift(last);
    }
    array=array.toString();
    for (let i = 0; i < array.length; i++) {
        array=array.replace(","," ");
    }
    console.log(array);
}

ArrayRotation([51, 47, 32, 61, 21], 2);
ArrayRotation([32, 21, 61, 1], 4);
ArrayRotation([2, 4, 15, 31], 5);