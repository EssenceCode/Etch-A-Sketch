const container = document.querySelector('.container');

function divCreate(num) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement('div');
    //row.className = 'row';
     row.classList.toggle('row'); 
    container.appendChild(row);  
    //console.log(row)
  for (let j = 0; j < num; j++) {
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