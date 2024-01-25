/*

const btn = document.querySelectorAll('.button');
const choose_number = document.getElementById("choose-number");


btn.forEach((item) => {
 console.log(item);
 btn.addEventListener("click", () => {
  btn.style.dysplay = 'none';
  choose_number.textContent = btn.textContent;
 })
})*/

//const btn = document.getElementById("demo");
//btn.addEventListener("dragstart", () => {

//} )

const select = document.getElementById("demo");


select.addEventListener("change", (event) => {
 const bgColor = event.target.value;
 document.body.style.backgroundColor = bgColor;
});