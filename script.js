


window.onload = function() {
    let prevx = 4;
    let rowStart = 7;
    let columnStart = 6;
    
    for(let i = 8 ; i > 0 ; i--){

        let div = document.createElement("div");
        div.classList.add("platform");
        document.querySelector("#grid").append(div);
        console.log(Math.floor(Math.random() * 2))
        let rand = Math.floor(Math.random() * 2) == 0
        if((rand == 0 && columnStart < 9 ) || columnStart == 1)
            columnStart++;
        else
            columnStart--;


        div.style.gridColumnStart = columnStart;
        div.style.gridColumnEnd = (columnStart + 1);
        div.style.gridRowStart = rowStart;
        div.style.gridRowEnd = (rowStart + 1);
        rowStart--;
        prevx = columnStart;
        
    }
  };
