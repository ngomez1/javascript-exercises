const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!"
paragraph.style.cssText = "color: red";
container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.textContent = "I'm a blue h3"
header3.style.cssText = "color: blue";
container.appendChild(header3);

const divBorder = document.createElement('div');
divBorder.style.cssText = "background-color: pink; border: solid black";
container.appendChild(divBorder);

const header1 = document.createElement('h1');
header1.textContent = "I'm in a div"
divBorder.appendChild(header1);

const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!"
divBorder.appendChild(paragraph2);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', (e) => {
    alert("Hello World");
    console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue'
  });