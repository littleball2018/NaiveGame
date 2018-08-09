window.onload = init;

var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;

    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");

    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");

    }
};

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,
    ships: [{locations: ["", "", ""], hits: ["", "", ""]},
        {locations: ["", "", ""], hits: ["", "", ""]},
        {locations: ["", "", ""], hits: ["", "", ""]}],
    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                //击中
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("You hitted!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank the ship!");
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed!");
        return false;

    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] != "hit") {
                return false;
            }
        }
        return true;

    },
    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }

    },
    generateShip: function () {
        var alphabet = "ABCDEFG";
        var row, col;
        var rowNum;
        var direction = Math.floor(Math.random() * 2);


        if (direction === 1) {
            //横着
            rowNum = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));

        } else {
            //竖着
            rowNum = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);

        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                //横着
                row = alphabet.charAt(rowNum);
                newShipLocations.push(row + "" + (col + i));

            } else {
                //竖着
                row = alphabet.charAt(rowNum + i);
                newShipLocations.push(row + "" + col);

            }
        }
        return newShipLocations;


    },
    collision: function (locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;

    }
};

var controller = {
    userGuesses:[],
    guessesTimes: 0,
    proccessGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            if(this.userGuesses.indexOf(location)>=0){
                alert("Please do not repeat the input.");
            }else {
                this.guessesTimes++;
                this.userGuesses.push(location);
                var hit = model.fire(location);
                if (hit && model.shipSunk === model.numShips) {
                    view.displayMessage("You sank all ships in " + this.guessesTimes + " times.");
                }
            }

        }

    }
};

function parseGuess(guess) {

    if (guess === null || guess.length != 2) {
        alert("Enter a capital letter and a number.");
    } else {
        var row = guess.charAt(0);
        var col = guess.charAt(1);
        if (isNaN(col) || row < 'A' || row > 'G' || col > model.boardSize - 1) {
            alert("Your guess isn't on the board.");
        }
        else {
            return row + "" + col;
        }
    }

    return null;

}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.proccessGuess(guess);
    guessInput.value = "";


}

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocations();

}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;

    }


// var userGuessLocation = 0;
// var userGuessesTime = 0;
// var userRightTime = 0;
// var isSunk = false;
//
// while (userRightTime < 3) {
//     do {
//         userGuessLocation = prompt("You guess! Where is the ship?");
//     } while (!userGuessLocationIsValid(userGuessLocation)) ;
//     userGuessLocation--;
//     userGuessesTime++;
//     if (userGuessLocation == location1 || userGuessLocation == location2 || userGuessLocation == location3) {
//         alert("You hitted!");
//         userRightTime++;
//         if (userRightTime == 3) {
//             isSunk = true;
//             alert("You hitted all ships!");
//         }
//     } else {
//         alert("Miss!");
//     }
//
// }
// var message = "You took " + userGuessesTime + " guesses to sink all ships!";
// alert(message);


// function makeShips() {
//     do {
//         x1 = Math.floor(Math.random() * 9);
//         y1 = Math.floor(Math.random() * 9);
//         x2 = Math.floor(Math.random() * 9);
//         y2 = Math.floor(Math.random() * 9);
//         x3 = Math.floor(Math.random() * 9);
//         y3 = Math.floor(Math.random() * 9);
//     } while (x1 == x2 || x2 == x3 || x1 == x3 || y1 == y2 || y2 == y3 || y1 == y3);
//
//     ship1 = {
//         x: x1, y: y1
//     };
//     ship2 = {
//         x: x2, y: y2
//     };
//     ship3 = {
//         x: x3, y: y3
//     };

    // do{
    //     x1_1=Math.floor(Math.random()*9);
    //     y1_1=Math.floor(Math.random()*7);
    //     x2_1=Math.floor(Math.random()*9);
    //     y2_1=Math.floor(Math.random()*7);
    //     x3_1=Math.floor(Math.random()*9);
    //     y3_1=Math.floor(Math.random()*7);
    // }while(x1==x2||x2==x3||x1==x3);

    // ship1={
    //     x1:x1_1, y1:y1_1,
    //     x2:x1_1, y2:y1_1+1,
    //     x3:x1_1, y3:y1_1+2
    // };
    // ship2={
    //     x1:x2_1, y1:y2_1,
    //     x2:x2_1, y2:y2_1+1,
    //     x3:x2_1, y3:y2_1+2
    // };
    // ship3={
    //     x1:x3_1, y1:y3_1,
    //     x2:x3_1, y2:y3_1+1,
    //     x3:x3_1, y3:y3_1+2
    // };
}

// function userGuessLocationIsValid(userGuessLocation) {
//     return userGuessLocation > 0 && userGuessLocation < 8;
//
// }
//
// function hitted(userLocation) {
// }


