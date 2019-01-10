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
    if (answer === "lungs") {
        character1++    
    }
    else if (answer === "doritos") {
        character2++
    }
    else if (answer === "workers") {
        character3++
    }
    else if (answer === "normies") {
        character4++
    }
}
function question3(answer) {
    if (answer === "yes"){
        return ("Awesome!! Another viewer of the checkered shirt bird beaked nose man!!!");
    }
    else if (answer === "no"){
        return ("How dare you take this quiz! Jk it's cool. But not really.");
    }
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
