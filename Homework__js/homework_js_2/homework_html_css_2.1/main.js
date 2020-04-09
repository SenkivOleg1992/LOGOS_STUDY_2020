let firstAsk = prompt('Найдовша річка світу: Ніл, Амазонка, Дніпро, Стрий ? ');
let secondAsk = prompt('Хто винайшов грамофон: мій сусід, маминої подруги розумний син, Томас Едісон , Нікола Тесла?');
let thirdAsk = prompt(' В якому році проголошено Незалежність України?');
let fourthAsk = prompt('Яка висота Евересту: вище неба, 8841, 8846, 8848 ?');
let fifthAsk = prompt('Яка найбільша область України: Одеська, Харківська, Луганська, Хмельницька ?');
let sixAsk = prompt('Із чого зроблена докторська ковбаса:  мяса, доктора, сусідського кота, паперу?');
let sevenAsk = prompt('Який правопис правильний: а)будь-ляска б)будь ласка в)будьласка г)пліз');
let eightAsk = prompt(' В якому році Андрій Шевченко здобув Золотий мяч: 1840, 2003, 2004, 2005 ?');
let nineAsk = prompt('Хто видумав рентген: Рентнген, Фокстрот, Марвел, Пулюй , Ілон Маск?');
let tenAsk = prompt('Скільки днів у високосному році ?');

let first = 'Ніл';
let second = 'Томас Едісон';
let third = 1991;
let fourth = 8848;
let fifth = 'Одеська';
let six = 'доктора';
let seven = 'будь ласка';
let eight = 2004;
let nine = 'Пулюй';
let ten = 366;

let res0 = 0;
let res1 = 0;
let res2 = 0;
let res3 = 0;
let res4 = 0;
let res5 = 0;
let res6 = 0;
let res7 = 0;
let res8 = 0;
let res9 = 0;

if (firstAsk == first) {
    res0 = 1;
} else {
    res0 = 0;
};
if (secondAsk == second) {
    res1 = 1;
} else {
    res1 = 0;
};
if (thirdAsk == third) {
    res2 = 1;
} else {
    res2 = 0;
};
if (fourthAsk == fourth) {
    res3 = 1;
} else {
    res3 = 0;
};
if (fifthAsk == fifth) {
    res4 = 1;
} else {
    res4 = 0;
};
if (sixAsk == six) {
    res5 = 1;
} else {
    res5 = 0;
};
if (sevenAsk == seven) {
    res6 = 1;
} else {
    res6 = 0;
};
if (eightAsk == eight) {
    res7 = 1;
} else {
    res7 = 0;
};
if (nineAsk == nine) {
    res8 = 1;
} else {
    res8 = 0;
};
if (tenAsk = ten) {
    res9 = 1;
} else {
    res9 = 0;
};

let totalRes = res0 + res1 + res2 + res3 + res4 + res5 + res6 + res7 + res8 + res9;

alert(`Ви набрали: ${totalRes} із 10 `);