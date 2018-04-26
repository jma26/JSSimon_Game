var userLevel;
var interval;
var maxLevel = 20;
simonSequence = [];
userSequence = [];


const audioA = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const audioB = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const audioC = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const audioD = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

gameStatus();



function gameStatus() {
    userLevel = 1;
    interval = setInterval(function() {
        setRandom();
        userLevel--;
    }, 1000);
}

// Set random number
function setRandom() {
    if (userLevel === 0) {
        clearInterval(interval);
    }
    let random = Math.floor(Math.random() * 4);
    simonSequence.push(random);
    console.log(simonSequence);
    if (random === 0) {
        setLevel("a", random);
    } else if (random === 1) {
        setLevel("b", random);
    } else if (random === 2) {
        setLevel("c", random);
    } else if (random === 3) {
        setLevel("d", random);
    }
}

function setLevel(id, random) {
    $("#" + id).css("opacity", "1");
    playSound(random);
    setTimeout(function() {
        $("#" + id).css("opacity", "0.6");
    }, 1000);
}

function playSound(num) {
    if (num === 0) {
        audioA.play();
    } else if (num === 1) {
        audioB.play();
    } else if (num === 2) {
        audioC.play();
    } else if (num === 3) {
        audioD.play();
    } 
}



    
    

