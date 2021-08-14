player1_Name = localStorage.getItem("Player1_Name");
player2_Name = localStorage.getItem("Player2_Name");
player1_score = 0;
player2_score = 0;
document.getElementById("Player1_Name").innerHTML = player1_Name + "=";
document.getElementById("Player2_Name").innerHTML = player2_Name + "=";
document.getElementById("Player1Score").innerHTML = player1_score;
document.getElementById("Player2_Score").innerHTML = player2_score;
document.getElementById("Player_question").innerHTML = "Question Turn - " + player1_Name;
document.getElementById("Player_answer").innerHTML = "Answer Turn - " + player2_Name;
function Send() {
   firstnumber=document.getElementById("firstnumber").value
   secondnumber=document.getElementById("secondnumber").value
   actualanswer=parseInt(firstnumber)+parseInt(secondnumber)
   console.log(actualanswer)
   document.getElementById("output").innerHTML="<h4>" + firstnumber + "+" + secondnumber + "</h4>" + "<br>" + "<input type='text' id='answerbox'>" + "<button type='button' onclick='check()'>Check</button>"
}





questionturnn = "player1";
answerturn = "player2";

function check() {
   answersent=document.getElementById("answerbox").value
   if (answersent == actualanswer) {
      if (answerturn == "player1") {
         player1_score = player1_score + 1;
         document.getElementById("Player1Score").innerHTML = player1_score;
         console.log(player1_score)
      }
      else {
         player2_score = player2_score + 1;
         document.getElementById("Player2_Score").innerHTML = player2_score;
         console.log(player2_score);
      }
   }
   if (questionturnn == "player1") {
      questionturnn = "player2"
      document.getElementById("Player_question").innerHTML = "questionturn -" + player2_Name;
   }
   else {
      questionturnn = "player1"
      document.getElementById("Player_question").innerHTML = "questionturn - " + player1_Name
   }
   if (answerturn == "player1") {
      answerturn = "player2"
      document.getElementById("Player_answer").innerHTML = "Answer Turn - " + player2_Name
   }
   else {
      answerturn = "player1"
      document.getElementById("Player_answer").innerHTML = "Answer Turn - " + player1_Name
   }
   document.getElementById("output").innerHTML = ""

}
