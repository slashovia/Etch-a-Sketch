const container = document.querySelector('.container');
const button = document.querySelector('button');


for (let index = 0; index < 16 ** 2; index++) {
    const div = document.createElement('div');
    div.classList.add("grid");
    container.appendChild(div);
};

function createGrid(input) {
    const allDiv = document.querySelectorAll('.container div');
    allDiv.forEach(element => { element.remove() });
    for (let index = 0; index < input ** 2; index++) {
        const div = document.createElement('div');
        div.classList.add("grid");
        div.style.flexBasis = `${100 / input}%`;
        container.appendChild(div);
    };

}

const allGrids = document.querySelectorAll('.grid');
allGrids.forEach(grid => {
    grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = `rgb(${rgbNumber()}, ${rgbNumber()}, ${rgbNumber()})`;
    })
});

function rgbNumber() {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}

button.addEventListener('click', () => {

    let input;
    do {
        input = Number(prompt("Select a number of columns, must be greater than 0 and minor than 100"));
        if (isNaN(input) || input <= 0 || input > 100) {
            alert("Invalid input. Please, try again.");
        }
    }

    while (isNaN(input) || input <= 0 || input > 100);

    createGrid(input);
});

