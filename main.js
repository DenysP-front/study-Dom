
const block = document.querySelector(".grid");
const items = block.querySelectorAll(".grid-card");
const firstItem = block.querySelector(".grid-card");
const newItem = firstItem.cloneNode(true);
console.log(newItem);


const text = document.querySelectorAll(".grid-text");
const arr = ["one", "two", "three", "four"];
const addTextFunction = function (text, arr) {
  for (let i = 0; i < text.length; i++) {
    text[i].textContent = `${arr[i]} ${text[i].textContent}`;
  }
};
addTextFunction(text, arr);

const obj = {
  colors: ["deeppink", "gold", "crimson", "limegreen"],
  bgcolor: ["#444444", "#8B4513", "#9ACD32", "#F5F5F5"],
  height: ["400", "350", "520", "200"],
};

const someChange = function (elements, obj) {
  const values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      let styles = elements[j].style.cssText;
      if (i === 0) {
        styles += `color: ${values[i][j]};`;
      }
      if (i === 1) {
        styles += `background-color: ${values[i][j]};`;
      }
      if (i === 2) {
        styles += `height: ${values[i][j]}px;`;
      }
      elements[j].style.cssText = styles;
    }
  }
};
// someChange(items, obj);

//rozbor
const addStyles = function (items, styles) {
  for (let i = 0; i < text.length; i++) {
    items[i].style.color = styles.colors[i];
    items[i].style.backgroundColor = styles.bgcolor[i];
    items[i].style.height = styles.height[i]+'px';
  }
}
addStyles(items, obj)


function addElement(targetEl, elToAdd, count) {
  const newElement = document.createElement(targetEl);
  for (let i = 0; i < count; i++) {
    const cloneElement = elToAdd.cloneNode(true);
    newElement.append(cloneElement);
    block.append(cloneElement)
  }
  console.log(newElement);
}
addElement("div", newItem, 0);

function deleteCard(targetEl, count) {
  const childElements = Array.from(targetEl.children);
  for (let i = childElements.length - 1; i >= childElements.length - count; i--) {
    childElements[i].remove(childElements[i]);
  }
}
deleteCard(block, 0);

const childElements = block.children;
const element = block.querySelector(".grid-card");

const cloneElement = element.cloneNode(true);
cloneElement.textContent = 'Новий ел-т';

function putElement(listToAdd, elToAdd, numToAdd) {
  numToAdd = numToAdd ? (numToAdd > 0 ? numToAdd = numToAdd - 1 : numToAdd) : 0; 
  if(numToAdd >= listToAdd.length) {
    block.append(elToAdd);
  } else {
    listToAdd[numToAdd].insertAdjacentElement('beforeBegin', elToAdd);
  }
}

putElement(childElements, cloneElement,)