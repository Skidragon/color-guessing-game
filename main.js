const redVal = document.getElementById("red-value");
const greenVal = document.getElementById("green-value");
const blueVal = document.getElementById("blue-value");

const playArea = document.getElementById("play-area");
const squaresArr = [];


const newColorsBtn = document.getElementById("new-colors-btn");
const easyBtn = document.getElementById("easy-btn");
const hardBtn = document.getElementById("hard-btn");
const brutalBtn = document.getElementById("brutal-btn");

const Square = {
    width: "75px",
    height: "75px"
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createColor(format) {

    return function (red, green, blue) {
        if (format === "rgb") {
            return `rgb(${red}, ${green}, ${blue})`;
        }
        else if (format === "hexadecimal") {
            return; //not yet implemented
        }
        else {
            return;
        }
    }
}

function seperateRgbValues(color) {
    return color.match(/\d+/g);
}


//Adds squares to play area
function generateSquares(quantity, width, height) {

    const square = document.createElement("div");

    square.style.width = width;
    square.style.height = height;
    square.style.borderRadius = "10px";

    const rgbFormat = createColor("rgb");
    const getRandomRgb = rgbFormat(randomInt(0, 255), randomInt(0, 255), randomInt(0, 255));
    square.style.backgroundColor = getRandomRgb;

    square.classList.add("shape-highlight");

    square.addEventListener("click", function () {
        square.style.visibility = "hidden";
    });
    playArea.appendChild(square);

    squaresArr.push(square);

    if (quantity === 1) {

        //chooses the square that lets you win the game
        const randomSqChoice = squaresArr[randomInt(0, squaresArr.length - 1)];
        
        console.log(randomSqChoice.style.backgroundColor);

        console.log(findRgbValues(randomSqChoice.style.backgroundColor));

        randomSqChoice.addEventListener("click", function (e) {
            const amountOfSquares = squaresArr.length;
            alert("You Guessed the right Square!");
            resetGame();
            generateSquares(amountOfSquares, Square.width, Square.height);

        });
        return;
    }
    else {
        return generateSquares(quantity - 1, width, height);
    }
}

function resetGame() {
    while (playArea.firstChild) {
        playArea.removeChild(playArea.firstChild);
    }
    while (squaresArr.length) {
        squaresArr.pop();
    }
    return;
}

function initGame() {
    generateSquares(6, Square.width, Square.height);
}
initGame();

newColorsBtn.addEventListener("click", function (e) {
    const amountOfSquares = squaresArr.length;
    if (amountOfSquares === 0) {
        alert("Please choose easy or hard to start the game!");
        return;
    }
    resetGame();
    generateSquares(amountOfSquares, Square.width, Square.height);
});


easyBtn.addEventListener("click", function (e) {
    resetGame();
    generateSquares(6, Square.width, Square.height);
});


hardBtn.addEventListener("click", function (e) {
    resetGame();
    generateSquares(9, Square.width, Square.height);
});
easyBtn.addEventListener("click", function (e) {
    resetGame();
    generateSquares(6, Square.width, Square.height);
});


hardBtn.addEventListener("click", function (e) {
    resetGame();
    generateSquares(9, Square.width, Square.height);
});

brutalBtn.addEventListener("click", function (e) {
    resetGame();
    generateSquares(15, Square.width, Square.height);
});