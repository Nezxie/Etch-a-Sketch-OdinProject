const mainBox = document.querySelector(".board");
const board = generateBoard(16);


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

clearButton.addEventListener('click',function(){
    let selectedTiles = [...(document.querySelectorAll(".tileMarked"))];
    for(let tile of selectedTiles){
        tile.classList.remove("tileMarked");
    }
});

themeButton.addEventListener('click',function(){
    const elem = document.querySelector(".wrapper");
    elem.classList.toggle("dark-mode");
    
});
