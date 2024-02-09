document.addEventListener('DOMContentLoaded', function () {
    function addToPeriodicTable(element, x, y) {
        const gridContainer = document.getElementById('periodic-table');
        const gridItem = document.createElement('div');
        gridItem.classList.add('periodic-element');
        gridItem.textContent = element;
        gridItem.style.gridRow = y;
        gridItem.style.gridColumn = x;
        gridContainer.appendChild(gridItem);
    }

    // todo: read this from periodic_table.json
    for (let yi = 1; yi <= 10; yi++) {
        for (let xi = 1; xi <= 18; xi++) {
            console.log(xi, yi);
            addToPeriodicTable(`Item ${xi},${yi}`, xi, yi);
        }
    }
});