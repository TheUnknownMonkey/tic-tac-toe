let board = document.getElementById("board");
let fields = [1,2,3,4,5,6,7,8,9];
let x = [];
let o = [];
let allSquares = [];
let eks = document.createElement("h1");
let oo = document.createElement("h1");
let restart = document.getElementById("restart-button");
let winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
let gameOn = true;
let announcer = document.getElementById("announcer");
let winnerIs = document.createElement("h3");
let restarta = document.getElementById("restart");

restarta.addEventListener("click", ()=>{

    for(let i = 0;i<board.childNodes.length; i++){
        gameOn=true
        console.log(board.childNodes[i])
        board.childNodes[i].innerHTML=""
        x=[];
        o=[];
        announcer.style.display="none";
    }
})

restart.addEventListener("click", ()=>{

    for(let i = 0;i<board.childNodes.length; i++){
        gameOn=true
        console.log(board.childNodes[i])
        board.childNodes[i].innerHTML=""
        x=[];
        o=[];
    }
})
eks.innerHTML="X"
oo.innerHTML="O"
for(let i=0;i<fields.length; i++){
 
    let square = document.createElement("div");
    board.appendChild(square);
    allSquares.push(square)

   
}


function checkIfOver(x,o){
    for(let i = 0; i<winningCombinations.length;i++){
        let xdone = 0
        let odone = 0
        for(let j = 0; j<winningCombinations[i].length;j++){
            if(x.includes(winningCombinations[i][j])){
                xdone+=1

                if(xdone>=3){
                    
                    return gameOver(winningCombinations[i], 1)

                }
            }
            else if(o.includes(winningCombinations[i][j])){
              
                odone+=1

                 if(odone>=3){
                    
                    return gameOver(winningCombinations[i], 0)
            }
        }
    }
}
}


function draw(gate, gameOn){
    //draw as in display on screen not a game that is drawn
    if(gameOn==true){
        console.log("how")
        console.log(gameOn)
        if(gate==1){
            for(let i=0;i<x.length; i++){
                board.childNodes[x[i]].innerHTML="";
               
                let eks = document.createElement("h1");
                
                eks.innerHTML="X"
               
    
    
                board.childNodes[x[i]].appendChild(eks)
    
            }   
            }
            else{
                for(let i=0;i<o.length; i++){
                    board.childNodes[o[i]].innerHTML="";
                    let oo = document.createElement("h1");
                    oo.innerHTML="O"
                    board.childNodes[o[i]].appendChild(oo)
        
        }
       
        }
        
    }
    
   
}

function gameOver(winner, gate){
    
    if(gameOn==true){

        if(gate==1){
            for(let i=0;i<x.length; i++){
                board.childNodes[x[i]].innerHTML="";
    
                let eks = document.createElement("h1");
                
                eks.innerHTML="X"
                eks.classList.add("winner")
                board.childNodes[x[i]].appendChild(eks)
                gameOn=false
                announcer.style.display="flex";
                winnerIs.innerHTML="X won!"
                announcer.append(winnerIs)
                
            }
        }
        else{
            for(let i=0;i<o.length; i++){
                board.childNodes[winner[i]].innerHTML="";
                let oo = document.createElement("h1");
                oo.innerHTML="O"
                oo.classList.add("winner")
                board.childNodes[winner[i]].appendChild(oo)
                gameOn=false
                
                winnerIs.innerHTML="O won!"
                announcer.append(winnerIs);
                announcer.style.display="flex";
        }
    }
    }
    
}

function game(){
   for(let i=0;i<fields.length; i++){
    allSquares[i].addEventListener("click", ()=>{
      
            if(x.length==o.length){
                
                if(x.includes(fields[i])==false && o.includes(fields[i])==false){
                     x.push(fields[i])
                     draw(1, gameOn)
                     checkIfOver(x,o);
                }
            }
            else{
                if(x.includes(fields[i])==false && o.includes(fields[i])==false){
                    o.push(fields[i])
                    draw(0, gameOn) 
                    checkIfOver(x,o);
           }
        
        }  
     })
}
}

game()

