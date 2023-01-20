// 1.
//Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// 1.

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    }
    else if (i % 2) {
        console.log(`${i} - нечётное число`);
    }
    else  {

        console.log(`${i} - чётное число`);
    }
}

//_______________________________________________
// 2. Дан массив [1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrSl = [1, 2, 3, 4, 5, 6, 7];
arrSl.splice(3, 2); // с позиции 3 (4), удить 2 элементa (4,5)
console.log(arrSl);

// ______________________________________________

// 3. Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
//и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3


const arrRandom = [];
for (let i = 0; i < 5; i++) {
    arrRandom[i] = Math.floor(Math.random() * 10);
}
console.log(arrRandom);

// //3.1 Рассчитать сумму элементов этого массива:

let sum = 0;
let min = arrRandom[0];

for (let i = 0; i < arrRandom.length; i++) {
    const elements = arrRandom[i];

    sum += elements;
}
console.log(`Сумма всех элементов массива = ${sum}`);

// // 3.2 Найти минимальное число

for (let i = 0; i < arrRandom.length; i++) {
    const elements = arrRandom[i];
    if (min > elements) {
        min = elements;
    }
}
console.log(`Минимальное число массива = ${min}`);

// 3.3 Найти есть ли в этом массиве число 3

const elNum = 3;
arrNumber (arrRandom, elNum);

function arrNumber(arrRandom, elNum) {
    for (let i = 0; i < arrRandom.length; i++) {
        if (arrRandom[i] === elNum) {
            return console.log(`В данном массиве есть число ${elNum}`);
        }
    }
    return console.log(`В данном массиве нет числа ${elNum}`);
}

// ___________________________________________
// 4.
// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i < 20; i++) {
  let x = '';
  for (var j = 0; j <= i; j++) {
    x += 'x';
  }
  console.log(x);
}
