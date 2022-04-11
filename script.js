const mainBox = document.querySelector(".board");
const board = generateBoard(16);
var myRoot = document.querySelector(':root');

function generateBoard(size){
    let container;
    let tmp;
    let myBoard=[];
    let element=[];
    let eventListnr=[];
   
    for(let i=0;i<size;i++){
        container=document.createElement("div");
        container.classList.add("tileRow");
        
        for(let j=0;j<size;j++){
            console.log("Im in");
            tmp=document.createElement("div");
            tmp.classList.add("tile");
            eventListnr.push(tmp.addEventListener('mouseover',function(){
                this.classList.add("tileMarked");
            }));
            element.push(tmp);


            container.appendChild(tmp);
        }
        myBoard.push(element,eventListnr);
        mainBox.appendChild(container);
    }
   
    return myBoard;
}

const clearButton=document.querySelector('#clearButton');
const themeButton=document.querySelector('#darkMode');
const sizeButton=document.querySelector('#sizeButton');
const colorButton=document.querySelector('#colorButton');

clearButton.addEventListener('click',function(){
    let selectedTiles = [...(document.querySelectorAll(".tileMarked"))];
    for(let tile of selectedTiles){
        tile.classList.remove("tileMarked");
    }
});

    

themeButton.addEventListener('click',function(){
    const elem = document.querySelector(".wrapper");
    const butt = document.querySelectorAll(".clearButton");
    const bord = document.querySelector(".board");
    bord.classList.toggle("dark-mode");
    elem.classList.toggle("dark-mode");
    for(let i of [...butt]){
        i.classList.toggle("dark-mode");
    }
    
});

sizeButton.addEventListener('click',function(){
   
    let size = window.prompt("Enter board size: ");
    if(Number.isInteger(+size) && size > 0 && size <= 640){
        let oldBoard=document.querySelectorAll(".tileRow");
        for(let i of [... oldBoard]){
            i.remove();
        }
        myRoot.style.setProperty('--boardSize', +size);  
        generateBoard(size)
    }
    else{
        alert("Invalid size! Size must be an integer and meet requierements: \n 0 < size < 641")
    }
});

colorButton.addEventListener('click',function(){
    let colorPicker = document.querySelector("#colorPicker");
    colorPicker.click();
});


const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", function(){
    myRoot.style.setProperty('--drawingColor', colorPicker.value);
});
