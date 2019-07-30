/* this is our psuedo coding,
so first we have to have all the html and css done, done;
once those are done we know we will need a timer counting down from 30 seconds to 0
once the timer reaches 0 the quiz will stop and we will alert the user which questions they got right.
we have p tags with ids for each answer in the html. we will add buttons to the p tags that are booleans. */

var intervalId;
var clockRunning = false;
var FQ = [];
var SQ = [];
var TQ = [];
var a = $("<button>");










$("#startTimer").on("click", start);

function start() {
if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    }
};



