/*
Author:samip Regmi(samTime101)
file:index.js
*/
//assigning first player
var player = 'red'
//filling all 9 states as null
var gameState = Array(9).fill(null)

//selecting all cols and adding eventlistener to each col
document.querySelectorAll('.col').forEach((element) => {
    element.addEventListener('click', (event) => {
        const id = Number(event.target.id)
        if (gameState[event.target.id] !== null) return;
        gameState[id] = player
        event.target.style.backgroundColor = player
        check_game_state()
        //we can do this if condition in 1 line also but for readibility I have done in a longgg way
        if (player === 'red') {
            player = 'blue'
            document.querySelector('#turn').textContent = `Its ${player}'s Turn`
        }
        else {
            player = 'red'
            document.querySelector('#turn').textContent = `Its ${player}'s Turn`

        }
    });
});
document.querySelector('#turn').textContent = `Its ${player}'s Turn`

//checking all states
function check_game_state() {
    if (
        (gameState[0] && gameState[0] === gameState[1] && gameState[0] === gameState[2]) ||
        (gameState[3] && gameState[3] === gameState[4] && gameState[3] === gameState[5]) ||
        (gameState[6] && gameState[6] === gameState[7] && gameState[6] === gameState[8]) ||
        (gameState[0] && gameState[0] === gameState[3] && gameState[0] === gameState[6]) ||
        (gameState[1] && gameState[1] === gameState[4] && gameState[1] === gameState[7]) ||
        (gameState[2] && gameState[2] === gameState[5] && gameState[2] === gameState[8]) ||
        (gameState[0] && gameState[0] === gameState[4] && gameState[0] === gameState[8]) ||
        (gameState[2] && gameState[2] === gameState[4] && gameState[2] === gameState[6])
    ) {
        document.querySelector('#winner').style.display = 'block'
        document.querySelector('#winner').textContent = `WINNER IS ${player.toUpperCase()}`
        document.querySelector('table').style.visibility = 'hidden'
        document.querySelector('#turn').style.visibility = 'hidden'
        console.log(gameState)
    }
    //checking if draw has occured
    var is_game_Draw = true;

    for (let i = 0; i < gameState.length; i++) {
        //if anyone of the cell is empty , then draw has not occured
        if (gameState[i] === null) {
            is_game_Draw = false;
            break;
        }
    }

    if (is_game_Draw) {
        document.querySelector('#winner').style.display = 'block'
        document.querySelector('#winner').textContent = 'DRAW NO RESULTS'
        document.querySelector('table').style.visibility = 'hidden'
        document.querySelector('#turn').style.visibility = 'hidden'
        console.log(gameState)
    }

}
