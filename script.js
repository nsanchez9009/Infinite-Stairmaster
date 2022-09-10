const player = document.querySelector("#player");

//0 is left, 1 is right
let facing = 1;

window.addEventListener("keydown", (e) => {
    const styles = window.getComputedStyle(player);

    if (e.code === "Space") {
        console.log(facing);
        if (facing) {
            moveRight(player, styles);
        }
        else {
            moveLeft(player, styles);
        }
    }

    else if (e.code === "ControlLeft") {
        rotate(player, styles);
    }

    //check if grid cell is empty
});

function moveRight(player, styles) {
    
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

function moveLeft(player, styles) {
    
    let columnStart = styles.gridColumnStart;
    columnStart = Number(columnStart);
    columnStart -= 1;
    
    let columnEnd = styles.gridColumnEnd;
    columnEnd = Number(columnEnd);
    columnEnd -= 1;

    player.style.gridColumnStart = columnStart;
    player.style.gridColumnEnd = columnEnd;

    moveUp(player, styles);
}

function rotate(player, styles) {
    if (facing) {
        player.classList.add("flipped");
        facing = 0;
        moveLeft(player, styles);
    }
    else {
        player.classList.remove("flipped");
        facing = 1;
        moveRight(player, styles);
    }
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

function isEmpty(start, end) {

}