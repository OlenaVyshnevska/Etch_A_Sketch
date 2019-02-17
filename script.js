for(i = 0; i < 16; i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');
    document.getElementById("container").appendChild(rows);
    for(j = 0; j < 16; j++){
        const cells = document.createElement('div');
        cells.classList.add('cells');
        rows.appendChild(cells);
        cells.addEventListener("mouseover", () => {
            cells.style.background = createColor();
        })
    }
} 


function createColor() {
    var letterCodes = '0123456789ABCDEF';
    var colorTag = '#';
    for (var i = 0; i < 6; i++) {
      colorTag += letterCodes[Math.floor(Math.random() * 16)];
    }
    return colorTag;
  }
