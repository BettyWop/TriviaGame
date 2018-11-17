//variables for questions
var gameQuestion = {
    questions: ["What is my Name?", "How old am I?", "How tall am I?", "What is my favorite color?"],
    possAnswer: [["Amy", "Annette", "Saba"], [22, 27, 31], ["6'1", "5'5", "5'10"], ["Pink", "Black", "Blue"]],
    rightAnswer: ["Annette", 27, "5'10", "Black"]
}
//variable for correct and incorrect answers
var correct = 0;
var incorrect = 0;
var timeOut = 0;
//function for starting game
$("#start-game").on("click", function () {
    //hide the start button
    game(0);
})
//function to run the game
function game(gameQuestionNumber) {
    $(".questions").empty();
    var p1 = $("<p>");
    $(p1).text(gameQuestion.questions[gameQuestionNumber]);
    $(".questions").append(p1);
    var b1 = $("<button class='answers' id=" + gameQuestionNumber + ">");
    var A1 = gameQuestion.possAnswer[gameQuestionNumber][0];
    $(b1).text(A1);
    $(b1).attr("value", A1);
    $(p1).append(b1);
    var b2 = $("<button class='answers' id=" + gameQuestionNumber + ">");
    var A2 = gameQuestion.possAnswer[gameQuestionNumber][1];
    $(b2).text(A2);
    $(b2).attr("value", A2);
    $(p1).append(b2);
    var b3 = $("<button class='answers' id=" + gameQuestionNumber + ">");
    var A3 = gameQuestion.possAnswer[gameQuestionNumber][2];
    $(b3).text(A3);
    $(b3).attr("value", A3);
    $(p1).append(b3);

    $(document).on("click", ".answers", function () {
        var myAns = $(this).val();
        var index = parseInt($(this).attr("id"))
        indResults(myAns, index);
    })

    function indResults(ans, num) {
        $(".questions").empty();
        if (ans === gameQuestion.rightAnswer[num]) {
            console.log("YAY");
            var correctRes = $("<p>Correct Answer!</p>");
            $(".questions").append(correctRes);
            correct++;
        } else {
            var wrongRes = $("<p>Wrong Answer!</p>");
            $(".questions").append(wrongRes);
            var betweenP = $("<p>The correct answer is:</p>");
            $(".questions").append(betweenP);
            var showRes = $("<p>" + gameQuestion.rightAnswer[num] + "</p>");
            $(".questions").append(showRes);
            incorrect++;
        }

        
        console.log(gameQuestionNumber);
        //continue to next step
        setTimeout(function() {
            gameQuestionNumber = gameQuestionNumber + 1;
            if (gameQuestionNumber < gameQuestion.questions.length) {
                game(gameQuestionNumber);
            } else {
                gameResult();
            }
        }, 2000)
    }
}
//function to give final results (write gameResult();)
function gameResult(){
    $(".questions").empty();
    $(".questions").append('<p>All Done, Here is how you did...</p>');
    $(".questions").append('<p>Correct Answers: ' +correct + '</p>');
    $(".questions").append('<p>Incorrect Answers: ' +incorrect+ '</p>');
    $(".questions").append('<button id="reset">Start Over?</button>');
};

$(document).on("click", "#reset", function(){
    correct = 0;
    incorrect = 0;
    timeOut = 0;
    game(0);
})

$("#start-game").click(function ()
     {
         $(this).hide();
     }
);
