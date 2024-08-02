const container = document.querySelector('.container');
const button = document.querySelector('button');


function createInitialGrid(size) {
    for (let index = 0; index < size ** 2; index++) {
        const div = document.createElement('div');
        div.classList.add("grid");
        container.appendChild(div);
    }
    addGridEventListeners();
}


function createGrid(input) {
    const allDiv = document.querySelectorAll('.container div');
    allDiv.forEach(element => element.remove());

    for (let index = 0; index < input ** 2; index++) {
        const div = document.createElement('div');
        div.classList.add("grid");
        div.style.flexBasis = `${100 / input}%`;
        container.appendChild(div);
    }

    addGridEventListeners();
}


function rgbNumber() {
    return Math.floor(Math.random() * 256);
}


function addGridEventListeners() {
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach(grid => {
        grid.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = `rgb(${rgbNumber()}, ${rgbNumber()}, ${rgbNumber()})`;
        });
    });
}


createInitialGrid(16);

button.addEventListener('click', () => {
    let input;
    do {
        input = Number(prompt("Select a number of columns, must be greater than 0 and less than 100"));
        if (isNaN(input) || input <= 0 || input > 100) {
            alert("Invalid input. Please, try again.");
        }
    } while (isNaN(input) || input <= 0 || input > 100);

    createGrid(input);
});

