// Copyright (c) 2024 Logan Dhillon. This software is subject to the GPL-3.0 license

/**
 * Create and add element to periodic table
 * @param {String} eName Name of element (e.g. Iron)
 * @param {String} eSymbol Element symbol (e.g. Fe)
 * @param {String} aMass Atomic mass
 * @param {String} aNumber Atomic number
 * @param {String} x X-position of element on p. table
 * @param {String} y Y-position of element on p. table
 * @param {String} block Periodic block (s, p, d, f)
 */
function addToPTable(eName, eSymbol, aMass, aNumber, x, y, block) {
    const pTable = document.getElementById('periodic-table');

    const wrapper = document.createElement('div');
    wrapper.className = `element-wrapper group ${block}-block`;

    const glow = document.createElement('div');
    glow.className = "element-glow";

    const element = document.createElement('div');
    element.className = "element";

    const header = document.createElement('div');
    header.className = "flex caption";

    const atomicNumber = document.createElement('div');
    atomicNumber.innerText = aNumber;

    const spacer = document.createElement('div');
    spacer.className = "spacer";

    const atomicMass = document.createElement('div');
    atomicMass.innerText = Math.round(parseFloat(aMass) * 100) / 100;

    header.appendChild(atomicNumber);
    header.appendChild(spacer);
    header.appendChild(atomicMass);

    const symbol = document.createElement('div');
    symbol.className = "element-symbol";
    symbol.innerText = eSymbol;

    const name = document.createElement('div');
    name.className = "caption";
    name.innerText = eName;

    element.appendChild(header);
    element.appendChild(symbol);
    element.appendChild(name);

    wrapper.appendChild(glow);
    wrapper.appendChild(element);

    wrapper.style.gridRow = y;
    wrapper.style.gridColumn = x;

    pTable.appendChild(wrapper);
}

function showError(title, body) {
    const alert = document.getElementById("alert");
    alert.classList.remove("-translate-y-20");
    document.getElementById("alert-title").innerText = title;
    document.getElementById("alert-body").innerText = body;
}

document.addEventListener('DOMContentLoaded', function () {
    fetch("api/data.json")
        .then(response => response.json())
        .then(json => {
            json.elements.forEach(element => {
                addToPTable(element.name, element.symbol, element.atomic_mass, element.number, element.xpos, element.ypos, element.block);
            });
        })
        .catch(e => showError("Error while fetching periodic table API contents", e));
});