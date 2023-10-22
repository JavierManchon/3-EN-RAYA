let defaultContent = "-"
let currentPlayer = document.body.querySelector("h1");

function createBoard () {
    let board$$ = document.body.querySelector("#board");

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

button$$.addEventListener("click", createBoard);


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