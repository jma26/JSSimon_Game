

$(document).ready(function() {
    var audioA = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
          
    var audioB = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    
    var audioC = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    
    var audioD = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

    $("#a").click(function() {
        audioA.play();
    })
    $("#b").click(function() {
        audioB.play();
    })
    $("#c").click(function() {
        
        audioC.play();
    })
    $("#d").click(function() {
       
        audioD.play();
    })
})
    
    

