//const container = document.querySelector(".container");

export function card(width, height, backgroundColor, borderRadius) {
 const mainContainer = document.querySelector('.main');
 const container = document.createElement('div');
 mainContainer.appendChild(container);
 const title = document.createElement('h1');
 title.innerHTML = 'hello!!!';
 title.style.color = 'gold';
 container.appendChild(title);
 container.style.width = width;
 container.style.height = height;
 container.style.backgroundColor = backgroundColor;
 container.style.borderRadius = borderRadius;
}