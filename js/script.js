{
    const arr = [2, 6, 1, 7, 3];

    function each(arr, callback) {
        let total = arr[0];

        for (let i = 1; i < arr.length; i += 1) {
            total = callback(total, arr[i]);
        }
        return total;
    }

    console.log(each(arr, add));
    console.log(each(arr, sum));
    console.log(each(arr, division));

    function add(first, second) {
        return first + second;
    }

    function sum(first, second) {
        return first * second;
    }

    function division(first, second) {
        return first / second;
    }
}
console.log('--------------------forEach---------------------------');

const arr = [2, 6, 1, 7, 3];
console.log(arr);

// item - Ітеруємий елемент
// idx - Індекс поточного елемента
// arr - масив, який ітеруємо

arr.forEach(function (item, idx, arr) {
    // console.log('item', item);
    // console.log('idx', idx);
    // console.log('arr', arr);
});

{
    arr.forEach(function (item, idx, arr) {
        console.log(arr[idx]);
        arr[idx] = item * 2;
    });

    console.log(arr);
}
{
    arr.forEach(function (_, idx) {
        console.log(idx);
    });
}

console.log('-------------------- => function ---------------------------');
