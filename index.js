const RED = "RED";
const BLUE = "BLUE";
const YELLOW = "YELLOW";
const GREEN = "GREEN";

var simon = {
    sendColor: function(color) {
        if (simon.sequence.length === 0) {
            // start a new game
        }
    },
    colors: [RED, BLUE, YELLOW, GREEN],
    sequence: [],
    nextSequence: function() {
        var nextColor = simon.colors[Math.floor(Math.random() * simon.colors.length)];
        simon.sequence.push(nextColor);
        console.log("The sequence ", simon.sequence);
    }
};

$(document).ready(function() {
    $("#green").click(function() {
        simon.sendColor(GREEN);
    });
    $("#red").click(function() {
        simon.sendColor(RED);
    });
    $("#blue").click(function() {
        simon.sendColor(BLUE);
    });
    $("#yellow").click(function() {
        simon.sendColor(YELLOW);
    });
})




    
    

