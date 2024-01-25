

export function mainContainer(width, height, backgroundColor, iscontainer) {
  const mContainer = document.getElementsByTagName('main');
  const container = document.createElement('div');
  mContainer[0].appendChild(container);

  const title = document.createElement('h1');
  container.appendChild(title);
  container.style.display = 'flex';
  container.style.alignItems = 'center'
  container.style.flexDirection = 'column';
  container.style.gap = '40px';
  title.innerText = `Selling on the internet like a pro`;
  title.style.color = 'white';
  title.style.margin = '104px auto';

  const descr = document.createElement('p');
  container.appendChild(descr);
  descr.innerText = 'We know how large objects will act, but things on a small scale just do not act that way.'
  descr.style.color = 'white';

  const btn = document.createElement('button');
  container.appendChild(btn);
  btn.style.width = '112px';
  btn.style.height = '32px';
  btn.style.display = 'inline-flex';

  const btn1 = document.createElement('button');
  container.appendChild(btn1);
  btn1.style.width = '112px'
  btn1.style.height = '32px';
  btn1.style.display = 'inline-flex';







  if (mContainer = iscontainer) {
    true;
  } else {
    false;
  };


  container.style.width = width;
  container.style.height = height;
  container.style.backgroundColor = backgroundColor;

}