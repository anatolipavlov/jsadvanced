var str = 'that trying the';
var arr = str.split(' ');
arr.filter((el) => el.length > 2 && el.startsWith('t'));

var arrT = [1,2,3,4,5,6,7,8,9,10];
arrT.filter( el => el % 2 === 0).reduce((previousValue, currentValue) => previousValue + currentValue**2, 0);