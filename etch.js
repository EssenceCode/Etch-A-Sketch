const container = document.querySelector('.container');
// create a function with loop that will create an div by given number
function divCreate(num) {
  for (let i = 0; i < num; i++) {
    // create an row container so my blocks will not wrap one by one
    const row = document.createElement('div');
    row.classList.toggle('row'); 
    container.appendChild(row);  
  for (let j = 0; j < num; j++) {
    // create an block element to append to the row container
     const block = document.createElement('div');
     block.classList.toggle('block');
     block.addEventListener('mouseover', (e) => {
        // e.target.classList.add('color');
        e.target.setAttribute('style', 'background: plum;');  
     });   

     row.appendChild(block);   
};  
  };
};
divCreate(16);
// create a button div to append the button inside
const containerBtn = document.createElement('div');
containerBtn.classList.toggle('button-container');
document.body.appendChild(containerBtn);

// create an button that will send the user a popup
// asking for the number of squares per side for the new grid. 
const resizeBtn = document.createElement('button');
resizeBtn.classList.toggle('resize-button')
resizeBtn.textContent = 'Change Size';
containerBtn.appendChild(resizeBtn);
resizeBtn.addEventListener('click', sizeDiv);

// create a function that will prompt the user to input a number to size the div
function sizeDiv(e) {
  let user = parseInt(prompt('enter a number equal or less than 100'));
  //console.log(e.target);
  // console.log(user);
  if (user <= 100) {
    removeNode();
    divCreate(user);
  }
  else if (user >= 100) {
    alert("only enter a number equal or less than 100");
  } 
  else if (!Number.isInteger(user)) {
    return "ERROR";
  }
};
function removeNode() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// create a button for change color
const colorBtn = document.createElement('button');
colorBtn.classList.toggle('rgb-button');
colorBtn.textContent = 'Change Color';
containerBtn.appendChild(colorBtn);
colorBtn.addEventListener('click', colorRandom)

// create a function that will generate a random color
function colorRandom() {
  let array = [];
  const r =  Math.floor(Math.random() * 256);
  const g =  Math.floor(Math.random() * 256);
  const b =  Math.floor(Math.random() * 256);
  array.push(r,g,b);
  const block = document.querySelectorAll('.block');
  //console.log(block)
  block.forEach(color => color.addEventListener('mouseover', (e) => {
    e.target.style.background = `rgb(${array[0]}, ${array[1]}, ${array[2]})`; 
  }))
  //return arr;
}

// create a function to delete the colors to create a white canvas
function removeColor() {
  document.querySelectorAll('.block').forEach(block => {
  //  block.classList.add('remove-color')
   block.removeAttribute('style');
  });
}
// create a reset button
const resetBtn = document.createElement('button');
resetBtn.classList.toggle('reset-button');
resetBtn.textContent = 'Clear';
containerBtn.appendChild(resetBtn);
resetBtn.addEventListener('click', removeColor);
// create a function to erase things
function eraseColor (e) {
  document.querySelectorAll('.block').forEach(erase => erase.addEventListener('mouseover', (e) => {
    e.target.setAttribute('style', 'background: white;');
  }) );
};

// create a button to erase the colors
const eraseBtn = document.createElement('button');
eraseBtn.classList.toggle('erase-button');
eraseBtn.textContent = 'Eraser';
containerBtn.appendChild(eraseBtn);
eraseBtn.addEventListener('click', eraseColor);