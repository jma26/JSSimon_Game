const RED = "RED";
const BLUE = "BLUE";
const YELLOW = "YELLOW";
const GREEN = "GREEN";
var interal;

const audioGreen = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const audioBlue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const audioRed = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const audioYellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

function startGame() {
    if (!simon.sequence.length) {
        simon.nextSequence();
    }
}

function playBack(sequence) {
    if (simon.counter === simon.sequence.length - 1) {
        clearInterval(interval);
    } 
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === RED) {
            $("#red").css("opacity", "1");
            setTimeout(function() {
                $("#red").removeAttr("style");
            }, 1000)
        } else if (sequence[i] === BLUE) {
            $("#blue").css("opacity", "1");
            setTimeout(function() {
                $("#blue").removeAttr("style");
            }, 1000)
        } else if (sequence[i] === GREEN) {
            $("#green").css("opacity", "1");
            setTimeout(function() {
                $("#green").removeAttr("style");
            }, 1000)
        } else if (sequence[i] === YELLOW) {
            $("#yellow").css("opacity", "1");
            setTimeout(function() {
                $("#yellow").removeAttr("style");
            }, 1000)
        }
    }
}

var simon = { 
    sendColor: function(color) {
        if (simon.sequence.length) {
            if (color === simon.sequence[simon.step]) {
                // go to the next step
                if (simon.step === simon.sequence.length - 1) {
                    console.log("sequence complete!");
                    simon.step = 0;
                    simon.nextSequence();
                } else {
                    simon.step++;
                }
            } else {
                // Lose condition
                alert("Wrong sequence!!");
                simon.sequence = [];
                simon.step = 0;
            }
        }
        console.log("Color pressed: ", color);
    },
    colors: [RED, BLUE, YELLOW, GREEN],
    sequence: [],
    step: 0,
    counter: 0,
    nextSequence: function() {
        var nextColor = simon.colors[Math.floor(Math.random() * simon.colors.length)];
        simon.sequence.push(nextColor);
        interval = setInterval(function() {
            console.log("Counting up:  ", simon.counter);
            playBack(simon.sequence);
            simon.counter++;
        }, 1500);
        console.log("The sequence ", simon.sequence);
    }
};

$(document).ready(function() {
    $("#green").click(function() {
        simon.sendColor(GREEN);
        audioGreen.play();
    });
    $("#red").click(function() {
        simon.sendColor(RED);
        audioRed.play();
    });
    $("#blue").click(function() {
        simon.sendColor(BLUE);
        audioBlue.play();
    });
    $("#yellow").click(function() {
        simon.sendColor(YELLOW);
        audioYellow.play();
    });
})




    
    

