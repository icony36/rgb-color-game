var squaresNum = 6;
var colors = [];
var colorPicked;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    setupSquares();
    setupModeBtn();
    setupResetBtn();
    reset();
}

function setupSquares(){
    // square event listener
    for (var i=0; i<squares.length; i++){
        // add initial color to square
        squares[i].style.backgroundColor = colors[i];
        // add event on click
        squares[i].addEventListener("click", function(){
            // compare clicked squares color to colorPicked
            if(this.style.backgroundColor === colorPicked){
                messageDisplay.textContent = "You Got It!";
                resetBtn.textContent = "Play Again?"
                // change every squares to the colorPicked
                changeColors(this.style.backgroundColor)
                // change h1 backgroundColor to the colorPicked
                h1.style.backgroundColor = this.style.backgroundColor
                    } else {
                // vanish the wrong picked square
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function setupModeBtn(){
    // modeBtn event listener
    // addEventListener to all modeBtn
    for(i=0; i< modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            // remove selected Class from all mode btn
            for(i=0; i< modeBtn.length; i++){
                modeBtn[i].classList.remove("selected");
            }
            // add selected Class to the clicked modeBtn
            this.classList.add("selected");
            // if modeBtn is easy then squaresNum = 3 else squaresNum = 6
            this.textContent === "Easy" ? squaresNum = 3 : squaresNum = 6;
            // reset the game
            reset();
        });
    }
}

function setupResetBtn(){
    // resetBtn event listener
    resetBtn.addEventListener("click",function(){
        reset();
    });
}

// reset the game
function reset(){
    //generate all random colors
    colors = generateColors(squaresNum);
    //pick one color from array
    colorPicked = colorPick();
    //change colorDisplay content to colorPicked
    colorDisplay.textContent = colorPicked;
    //change resetBtn text to "NEW COLORS"
    resetBtn.textContent = "New Colors";
    // hide messageDisplay
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i=0; i<squares.length; i++){
        if(colors[i]){
            // show the squares
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            // hide the squares
            squares[i].style.display = "none";
        }
    }
    //change h1 background color to the original
    h1.style.backgroundColor = 'steelblue';
}

// generate array of colors
function generateColors(num){
    //create an array
    var arr = [];
    // repeat num times
    for (i=0; i<num; i++){
        // get a random color and push it to the array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

// random color for the array
function randomColor(){
    //pick a "red" from 0-255;
    var r = Math.floor(Math.random() *256);
    //pick a "blue" from 0-255;
    var g = Math.floor(Math.random() *256);
    //pick a "green" from 0-255;
    var b = Math.floor(Math.random() *256);
    // return "rgb(r, g, b)"
    return "rgb("+r+", "+g+", "+b+")";
}

// pick the one color
function colorPick(){
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

// change the initial color of squares
function changeColors(color){
    // loop through all squares
    for(i=0; i<squares.length; i++){
        // change the square backgroundColor to the given color
        squares[i].style.backgroundColor = color;
    }
}


// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     squaresNum = 3
//     colors = generateColors(squaresNum);
//     colorPicked = colorPick();
//     colorDisplay.textContent = colorPicked;
//     messageDisplay.textContent = "";
//     for(i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
//     h1.style.backgroundColor = this.style.backgroundColor;
// })

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     squaresNum = 6
//     colors = generateColors(squaresNum);
//     colorPicked = colorPick();
//     colorDisplay.textContent = colorPicked;
//     messageDisplay.textContent = "";
//     for(i=0; i<squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
        
//     }
//     h1.style.backgroundColor = this.style.backgroundColor;
// })