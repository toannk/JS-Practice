let my_element = document.createElement('div');
let my_heading = document.createElement('h1');

my_heading.innerText = 'This is heading 1';
my_element.appendChild(my_heading);
my_element.classList.add('wrap');

document.body.appendChild(my_element);