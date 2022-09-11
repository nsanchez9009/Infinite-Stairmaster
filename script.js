const grid = document.querySelector("#grid");

let l1;
let prev = 1;
let flag = 0;

window.onload = function() {
    let rowStart = 7;
    let columnStart = 6;

    l1 = new LinkedList();
    l1.add(1);
    
    for (let i = 7 ; i > 0 ; i--) {

        const div = document.createElement("div");
        div.classList.add("platform");

        grid.append(div);

        let rand = Math.floor(Math.random() * 2) == 0

        if((rand === 0 && columnStart < 9 ) || columnStart === 1) {
            columnStart++;
            l1.add(1);
        }

        else {
            columnStart--;
            l1.add(0);
        }

        div.style.gridColumnStart = columnStart;
        div.style.gridColumnEnd = (columnStart + 1);
        div.style.gridRowStart = rowStart;
        div.style.gridRowEnd = (rowStart + 1);

        rowStart--;
    }
};

const player = document.querySelector("#player");

//0 is left, 1 is right
let facing = 1;

window.addEventListener("keydown", (e) => {
    const styles = window.getComputedStyle(player);

    if (e.code === "Space" && flag === 0) {
        if (facing) {
            moveRight(player, styles);
        }
        else {
            moveLeft(player, styles);
        }
    }

    else if (e.code === "ControlLeft" && flag === 0) {
        rotate(player, styles);
    }

    if(facing != l1.head.element) {
        alert("fail");
        flag = 1;
    }

    l1.remove();
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

    moveUp();
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

    moveUp();
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

function moveUp() {
    const platforms = document.querySelectorAll(".platform");

    platforms.forEach(div => {
        let rowStart = div.style.gridRowStart;
        rowStart = Number(rowStart);
        rowStart += 1;

        let rowEnd = div.style.gridRowEnd;
        rowEnd = Number(rowEnd);
        rowEnd += 1;

        if (rowStart >= 10) {
            rowStart = 1;
            rowEnd = 2;
        }

        div.style.gridRowStart = rowStart;
        div.style.gridRowEnd = rowEnd;
    });
}

class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    add(element){
        let node = new Node(element);

        let current;
 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    remove(){
        if(!this.head) return;
        this.head = this.head.next;
    }

}