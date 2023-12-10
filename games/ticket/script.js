var today = new Date();
const dd = String(today.getDate());
const mm = today.toLocaleString('default', { month: 'long' }).substring(0, 3);
const yyyy = today.getFullYear();
const choice = 'ABCDEF'

today = dd + ' ' + mm + ' ' + yyyy;

document.getElementById('date').innerHTML = today;
document.getElementById('date2').innerHTML = today;

document.getElementById('car').innerHTML = Math.round(Math.random() * 14 + 1, 0);

document.getElementById('seat').innerHTML = Math.round(Math.random() * 5 + 1, 0) + choice[Math.floor(Math.random() * choice.length)];

const randBarcode = 'HG' + (Math.round(Math.random() * 888888) + 111111);

document.getElementById('bc1').innerHTML = randBarcode;
document.getElementById('bc2').innerHTML = randBarcode;
