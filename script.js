const player = document.querySelector("#player");

//0 is left, 1 is right
let facing = 1;

window.addEventListener("keydown", (e) => {
    console.log(e.code);
    if (e.code === "Space") {
        if (facing) {
            moveRight(player);
        }
        else {
            moveLeft(player);
        }
    }

    else if (e.code === "ControlLeft") {
        rotate(player, facing);
    }
});

function moveRight(player) {

    const styles = window.getComputedStyle(player);
    
    let columnStart = styles.gridColumnStart;
    columnStart = Number(columnStart);
    columnStart += 1;
    
    let columnEnd = styles.gridColumnEnd;
    columnEnd = Number(columnEnd);
    columnEnd += 1;

    player.style.gridColumnStart = columnStart;
    player.style.gridColumnEnd = columnEnd;

    moveUp(player, styles);
}

function moveLeft(player) {

}

function rotate(player, facing) {
    

}

function moveUp(player, styles) {

    let rowStart = styles.gridRowStart;
    rowStart = Number(rowStart);
    rowStart -= 1;

    let rowEnd = styles.gridRowEnd;
    rowEnd = Number(rowEnd);
    rowEnd -= 1;

    player.style.gridRowStart = rowStart;
    player.style.gridRowEnd = rowEnd;
}