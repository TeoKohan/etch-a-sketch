function create_grid(x) {

    const y = x;

    let grid = [];

    let cell = document.createElement('div');
    cell.classList.add('cell');

    let row = document.createElement('div');
    row.classList.add('row');
    for(let i = 0; i < x; ++i)
        row.append(cell.cloneNode(false));

    for(let i = 0; i < y; ++i)
        board.append(row.cloneNode(true));

    let cells = document.querySelectorAll('.cell');
    console.log(`cells length ${cells.length}`);
    cells.forEach(c => c.addEventListener('mouseenter', () => c.classList.add('painted')));

}

function new_grid() {
    let newsize = prompt("Enter new grid size (max 64)");
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    newsize = clamp(newsize, 1, 64);
    board.textContent = '';
    create_grid(newsize);
}

let board = document.querySelector('.board');
create_grid(16);

let button = document.querySelector('button');
button.addEventListener('click', new_grid)

