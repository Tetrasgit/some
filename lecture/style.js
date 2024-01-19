export function card(wiidth, height, background, border) {
 const main = document.getElementsByClassName('main');
 const container = document.createElement('div');
 main[0].appendChild(container);
 const title = document.createElement('h1');
 title.innerHTML = 'hello';
 title.style.color = 'blue';
 container.appendChild(title);

 container.style.width = wiidth;
 container.style.height = height;
 container.style.background = background;
 container.style.border = border;
}