for(i = 0; i < 16; i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');
    document.getElementById("container").appendChild(rows);
    for(j = 0; j < 16; j++){
        const cells = document.createElement('div');
        cells.classList.add('cells');
        rows.appendChild(cells);
        cells.addEventListener("mouseover", () => {
            cells.style.background = "black"
        })
    }
}    
