// Copyright (c) 2024 Logan Dhillon. This software is subject to the GPL-3.0 license

const colors = {
    's': "#E77975", // red
    'p': "#F3CE49", // yellow
    'd': "#70A3F3", // blue
    'f': "#77DB89"  // green
}

document.addEventListener('DOMContentLoaded', function () {
    function addToPeriodicTable(symbol, x, y, block) {
        const pTable = document.getElementById('periodic-table');
        const element = document.createElement('div');
        element.classList.add('periodic-element');
        element.style.backgroundColor = colors[block];
        element.textContent = symbol;
        element.style.gridRow = y;
        element.style.gridColumn = x;
        pTable.appendChild(element);
    }

    fetch("resources/periodic_table.json")
        .then(response => response.json())
        .then(json => {
            json.elements.forEach(element => {
                addToPeriodicTable(element.symbol, element.xpos, element.ypos, element.block);
            });
        })
        .catch(e => console.error(e));
});