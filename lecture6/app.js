/*
const btn = document.getElementById('btn');
function openAlert() {
 alert('hello');
}
btn.addEventListener('click', openAlert);
*/
/*
function openAlert() {
 const mainContainer = document.getElementsByTagName("main")[0];
 const cardContainer = document.createElement("div");
 mainContainer.appendChild(cardContainer);

 const width = prompt("cardContainer width");
 const height = prompt("cardContainer height");
 const backgroundColor = prompt("cardContainer backgroundColor");

 cardContainer.style.width = `${width}px`;
 cardContainer.style.height = `${height}px`;
 cardContainer.style.backgroundColor = `${backgroundColor}`;
}
openAlert();

*/

/*
const btn = document.getElementById("btn");
const card = document.querySelector(".card");


btn.addEventListener("click", () => {
 const isLogedIn = false;

 if (!isLogedIn) {
  //alert("yoy are allready loged in")
  window.location.reload();
  setTimeout(() => {
   alert("hello");
  }, 3000);
 } else {
  alert("you are not loged in");
 }

})

*/

/*
const btn = document.getElementById("btn");
const input = document.getElementsByTagName("input")[0];
const card = document.querySelector(".card");

btn.addEventListener("click", () => {
 card.innerHTML = `<h1>${input.value}</h1>`;
})

*/

const fname = document.getElementById('text');
const password = document.getElementById('password');
const email = document.getElementById('email');
const btn = document.getElementById('btn');


btn.addEventListener("click", (event) => {
 const isLogedIn = false
 if (!isLogedIn) {

 }
})

