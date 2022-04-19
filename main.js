// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при x, що дорівнює 1, 0, -3

// let x = 200;
// if (x === 0) {
//     console.log("Вірно")
// } else {
//     console.log("Не вірно")
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('time?')
//
// if (time >= 1 && time <= 15) {
//     console.log("Persha chvert`")
// } else if (time > 15 && time < 30) {
//     console.log('Druga chvert')
// } else if (time >= 30 && time < 45) {
//     console.log('Tretya chvert')
// } else if (time >= 45 && time <= 60) {
//     console.log('Chetverta chvert')
// } else {
//     console.log('Oops, problem :(')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('?')
//
// if (day > 0 && day <= 11) {
//     console.log('Persha dekada')
// } else if (day > 11 && day <= 20) {
//     console.log('Druga dekada')
// } else if (day > 20 && day <= 31) {
//     console.log('Tretya dekada')
// } else {
//     console.log('Oops, trouble.')
// }

// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
//     на цей день (можна замість плану на день, назву дня англійською).

// switch (+prompt('day number')) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Trouble.')
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let firstNumber = +prompt('first number?')
// let secondNumber = +prompt('second number?')
//
// if (firstNumber > secondNumber) {
//     console.log('Перше число більше ніж друге')
// } else if (secondNumber > firstNumber) {
//     console.log('Друге число більше ніж перше')
// } else if (secondNumber === firstNumber) {
//     console.log('Числа одинакові')
// }







