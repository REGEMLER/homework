// 1. Создайте путой массив. С помощью цикла заполните массив числами, где каждое число
// равно квадрату своего номера. (длина массива должна быть 10)

// let arr = [];
// for(let i = 0;i<10;i++){
//     arr.push(i*i);
// }
// console.log(arr);


// 2. Создать случайный массив из 10 чисел. Вывести на экран
// количество четных чисел из этого массива.

let arr = [12, 65, 37, 11, 76, 21, 27, 88, 91, 72];
let counter = 0;
for(let i = 0; i<arr.length; i++){
    if (arr[i]%2===0){
        ++counter;
    }
}
alert(counter);

// 3. Создать случайный массив из 10 чисел. Вывести на экран
// наибольшее число из этого массива.

// let arr = [11, 65, 37, 111, 76, 21, 27, 88, 91, 72];
// let max = arr[0];
// for(let i = 1; i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i];
//     }
// }
// alert(max);

// 4. Дана строка «Мы любим JavaScript». Используя
// метод split, создайте на основе это строки
// массив.(Вывод данных: Мы,любим,JavaScript).

let str = "We love JavaScript";
let arr = str.split(" ");
console.log(arr);
console.log(arr.length);

// 5.Дан массив ["Мы","любим","JavaScript"]. Используя
// метод join, создайте и выведите строку. В качестве
// разделителя используйте "!" (Вывод данных: Мы!любим!JavaScript).

// let arr = ["We", "Love", "JavaScript"];
// let str = arr.join("!");
// console.log(str);

// 6.Дан массив ["Я","великий","программист!"] с
// помощью метода indexOf, вывести на экран
// номер позиции строки "программист!"

// let arr = ["Iam", "great", "pragrammer!"];
// alert(arr.indexOf("pragrammer!"));