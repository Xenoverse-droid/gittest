// const array1 = [1, 2, 3];
// const array2 = array1.slice();

// array2.push(4);
// console.log(array1);
// console.log(array2);
console.log('Printing all the odd numbers from 1 - 10');
for (let i = 1; i <=10; i++) {
    if (i%2 === 1) {
        continue;
    }
    console.log(i);
}