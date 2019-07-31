/* this is our psuedo coding,
so first we have to have all the html and css done, done;
once those are done we know we will need a timer counting down from 30 seconds to 0
once the timer reaches 0 the quiz will stop and we will alert the user which questions they got right.
we have p tags with ids for each answer in the html. we will add buttons to the p tags that are booleans. */

var time = $("#timeRem");

$("#startTimer").on("click", function () {
    var counter = 30;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timeRem");
            span.innerHTML = counter;
        }
        if (counter === -1) {
            alert("Times Up! lets see what you have correct");
            clearInterval(counter);
        }
    }, 1000);
});


$("#one").on("click", function() {
    alert("Correct! Zoom!");
});

$("#two").on("click", function () {
    alert("Incorrect!");
});

$("#three").on("click", function() {
    alert("Correct! Dont worry I wish I had one too");
});

$("#four").on("click", function () {
    alert("Incorrect!");
});

$("#five").on("click", function () {
    alert("Incorrect! The only thing suzuki has done right is the GSXR");
});

$("#six").on("click", function () {
    alert("Correct!");
});

$("#seven").on("click", function () {
    alert("Correct! Fast huh?")
});

$("#eight").on("click", function () {
    alert("Incorrect. You dare doubt the H2R?");
});

//i dont plan on keeping these alerts, just easier for me to use when im done with the rest of the coding so i know which are correct and incorrect