let mydiv = document.querySelector('#mydiv');

let newElement = document.createElement('span');
newElement.textContent = "Kya re"

mydiv.insertAdjacentElement("afterend",newElement)
