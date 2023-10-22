let defaultContent = "-"
let currentPlayer = document.body.querySelector("h1");
let table$$ = document.body.querySelector("table");

function generateBoard () {
    let board$$ = document.body.querySelector("#board");
    currentPlayer.textContent = "Jugador 1";

    board$$.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        let newRow = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let newBox = document.createElement("td");
            newBox.textContent = defaultContent;
            newRow.appendChild(newBox);
        }
        board$$.appendChild(newRow);
    }

    let cells = document.body.querySelectorAll("td");
    for (let cell of cells) {
        cell.addEventListener("click", addResult);
    }
}

let button$$ = document.createElement("button");
button$$.textContent = "Start";
document.body.appendChild(button$$);

button$$.addEventListener("click", generateBoard);


let activePlayer = 0;

function addResult() {
    if (this.textContent === defaultContent) {
        if (activePlayer === 0) {
            this.textContent = "X";
            currentPlayer.textContent = "Jugador 2";
            activePlayer = 1;
        } else {
            this.textContent = "O";
            currentPlayer.textContent = "Jugador 1";
            activePlayer = 0;
        }
    }

    let rows = document.body.querySelectorAll("tr");
    let consoleBoard = [];
    for (let row of rows) {
        let cells = row.querySelectorAll("td");
        let rowsContent = [];
        for (let cell of cells) {
            rowsContent.push(cell.textContent);
        }
        consoleBoard.push(rowsContent);
    }

    if(consoleBoard[0][0] === "X" && consoleBoard[0][1] === "X" && consoleBoard[0][2] === "X" ||
     consoleBoard[0][0] === "X" && consoleBoard[1][0] === "X" &&  consoleBoard[2][0] === "X" || 
     consoleBoard[0][1] === "X" && consoleBoard[1][1] === "X" &&  consoleBoard[2][1] === "X" || 
     consoleBoard[0][2] === "X" && consoleBoard[1][2] === "X" &&  consoleBoard[2][2] === "X" || 
     consoleBoard[0][0] === "X" && consoleBoard[1][1] === "X" &&  consoleBoard[2][2] === "X" || 
     consoleBoard[0][2] === "X" && consoleBoard[1][1] === "X" &&  consoleBoard[2][0] === "X") {
        console.log(consoleBoard);
        console.log("Jugador 1 ha ganado!");
        currentPlayer.textContent = "JUGADOR 1 GANA!";
        activePlayer = 0;
        let winnerImage = document.createElement("img");
        winnerImage.src = "https://www.infobae.com/new-resizer/BVrHgP3GbBdpOdlqYq4boXSEXVo=/arc-anglerfish-arc2-prod-infobae/public/MJNQIO5UZIPXOIBDN3OVETUDME.jpg";
        table$$.innerHTML = '';
        table$$.appendChild(winnerImage);
     } else if (consoleBoard[0][0] === "O" && consoleBoard[0][1] === "O" && consoleBoard[0][2] === "O" ||
     consoleBoard[0][0] === "O" && consoleBoard[1][0] === "O" &&  consoleBoard[2][0] === "O" || 
     consoleBoard[0][1] === "O" && consoleBoard[1][1] === "O" &&  consoleBoard[2][1] === "O" || 
     consoleBoard[0][2] === "O" && consoleBoard[1][2] === "O" &&  consoleBoard[2][2] === "O" || 
     consoleBoard[0][0] === "O" && consoleBoard[1][1] === "O" &&  consoleBoard[2][2] === "O" || 
     consoleBoard[0][2] === "O" && consoleBoard[1][1] === "O" &&  consoleBoard[2][0] === "O") {
        console.log(consoleBoard);
        console.log("Jugador 2 ha ganado!");
        currentPlayer.textContent = "JUGADOR 2 GANA!";
        activePlayer = 0;
        let winnerImage = document.createElement("img");
        winnerImage.src = "https://imagenes.elpais.com/resizer/3cTuPonUNopq2Qq9j1YHJbHWOjs=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/U5FM5XX6JBC6BDLDR6CXFBHEWY.jpg";
        table$$.innerHTML = '';
        table$$.appendChild(winnerImage);
     } else {
        console.log(consoleBoard);
     }
}

//tengo que hacer la comprobación de que gane,
//para ellos tengo qu edibujar a traves de array el resultado que vaya saliendo por consola en forma de array.
// Entonces, defino condiciones de gana uno u otro, por ejemplo:
/*
[O,-,X]
[O,X,X]
[X,-,O]

Ha ganado el jugador 1
*/