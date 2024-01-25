/*
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const demo = document.getElementById('demo');

demo.style.display = 'none';

if (input.ariaValueMax.length)*/


const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');


zero.textContent = 0;
plus.textContent = '+';
minus.textContent = '-';


plus.addEventListener('click', () => {
 zero.textContent++;
})


minus.addEventListener('click', () => {
 if (+zero.value === 0) {
  alert('გაჩერდი');
 } else {
  zero.textContent--;
 }

})