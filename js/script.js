/* global $ */
var character1 = 0
var character2 = 0
var character3 = 0
var character4 = 0
function question1(answer) {
    if (answer === "Smoking") {
        character1++
    }
    else if (answer === "Tostitos") {
        character2++
    }
    else if (answer === "Company") {
        character3++
    }
    else if (answer === "President") {
        character4++
    }
}
function question2(answer) {
    if (answer === "Lungs") {
        character1++    
    }
    else if (answer === "Doritos") {
        character2++
    }
    else if (answer === "Workers") {
        character3++
    }
    else if (answer === "Normies") {
        character4++
    }
}
function question3(answer) {
    if (answer === "")
}
$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});
