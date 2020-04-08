var started = false;
var score = -1;


$(document).keypress(function() {
  if (!started) {
    $(".start").text("Game started, Press a number from 1 to 10");
    startseq();
    started = true;
  }
});

$(document).keypress(function(e){
  var clicknum = e.which;
  checkanswer(clicknum);



})

function checkanswer(clicknum){
  var randomNumber = Math.floor(Math.random() * 10)+1;
  if(!(clicknum == (randomNumber+48))){
    startseq()

    }
  else{
    $(".start").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
    }, 200);
    startOver();
  }
}


function startseq(){
  $(".start").text("Game started, Press a number from 1 to 10");

  $(".score").text(""+score);
  score++;



}

function startOver() {
  started = false;
  score = 0;

}
