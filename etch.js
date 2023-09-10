
let container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

function createGrid(row, column) {
    container.setAttribute('style',`--rowNum: ${row}; --columnNum: ${column};`);
    for (x = 0; x < row * column; x++) {
        let box = document.createElement('div');
        // box.textContent = `${x + 1}`;
        container.appendChild(box).className = 'box';
    } 

    let boxes = document.getElementsByClassName('box');
    for (box of boxes) {
        box.addEventListener('mouseover', (e) => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let a = Math.floor(Math.random() * 11); 
            let randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;
            counter_n++;
            counter.textContent = `Counter: ${counter_n}`;  
            e.target.setAttribute('style', `background: ${randomColor}`);
          });
    }
}


let button = document.createElement('button');
button.textContent = 'Change Grid Size';
button.addEventListener('click', (e) => {
    buttonClear();
    n = prompt('Grid', 2);
    if (n > 50) {
        createGrid(50, 50);
    } else if (n < 2) {
        createGrid(2, 2);
    } else {
        createGrid(n, n);
    };
})

function buttonClear () {
    container.textContent = '';
    counter_n = 0;
}

document.body.appendChild(button);


let counter = document.createElement('div');
counter.className = 'counter';
let counter_n = 1; 
document.body.appendChild(counter);

let n = prompt('Grid', 2);
createGrid(n, n);




// let x = prompt('Grid', 2);

// for (i = 2; i <= x; i++ ) {
//     if (x % 2 !== 0) { 
//         x++
//     }
//     div.appendChild(span.cloneNode(true));
// }


