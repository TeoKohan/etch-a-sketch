let cell = document.createElement('div');
cell.classList.add('cell');

let row = document.createElement('div');
row.classList.add('row');
for(let i = 0; i < 16; ++i)
    row.append(cell.cloneNode(false));

let board = document.querySelector('.board');
for(let i = 0; i < 16; ++i)
    board.append(row.cloneNode(true));