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
        e.target.classList.toggle('color');
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
resizeBtn.textContent = 'resize';
containerBtn.appendChild(resizeBtn);

// create a function that will prompt the user to input a number to size the div
function sizeDiv(e) {
  let user = Number(prompt('enter a number equal or less than 100'));
  //console.log(e.target);
  //console.log(typeof user);
  if (user <= 100) {
    removeNode();
    divCreate(user);
  }
  else if (user >= 100) {
    alert("only enter a number equal or less than 100");
  } 
  else if (!Number.isInteger(user)) {
    alert('enter a valid number');
  }
};
function removeNode() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
resizeBtn.addEventListener('click', sizeDiv);

// create a button for change color
const rgbBtn = document.createElement('button');
rgbBtn.classList.toggle('rgb-button');
rgbBtn.textContent = 'rgb';
containerBtn.appendChild(rgbBtn);

// create a function that will generate a random color
function colorRandom() {
  let array = []
  for (let i = 0; i < 3; i++) {
    let rgb = Math.floor(Math.random() * 256);
    array.push(rgb);
    //console.log(array);
    //console.log(Array.isArray(array));
    const block = document.querySelectorAll('.block')
    //console.log(block);
    block.forEach(color => color.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = `rgb(${array[0]}, ${array[1]}, ${array[2]})`; 
    }))
  }
}
rgbBtn.addEventListener('click', colorRandom);