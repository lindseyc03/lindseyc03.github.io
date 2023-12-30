let consoleTracker = -1;
function setup() {
    createCanvas(1000, 700);
    noStroke();

    starField = Array(200).fill().map(() => ({
        x: random(width),
        y: random(height),
        size: random(1, 3)
    }));
}

function draw() {
    let currentMin = minute();
    if(currentMin !== consoleTracker) {
        console.log(currentMin);
        consoleTracker = currentMin;
    }

    background('#131862');

    fill(255);
    starField.forEach(star => {
        ellipse(star.x, star.y, star.size * random(0.5, 1.5));
    });

    let hrs = hour();
    let mins = minute();
    let secs = second();

    let diamSec = 100;
    let diamMin = 200;
    let diamHour = 300;

    let ySec = 100;
    let yMin = ySec + diamSec / 2 + diamMin / 2 + 10;
    let yHour = yMin + diamMin / 2 + diamHour / 2 + 10;

    fill(255);
    ellipse(400, ySec, diamSec, diamSec);
    ellipse(400, yMin, diamMin, diamMin);
    ellipse(400, yHour, diamHour, diamHour);

  
    let phaseSec;
if(secs <= 30) {
    // left to right over the first 30 seconds
    phaseSec = map(secs, 0, 30, -diamSec / 2, diamSec / 2);
} else {
    //right to left over the next 30 seconds
    phaseSec = map(secs, 30, 60, diamSec / 2, -diamSec / 2);
}
    let phaseMin;
    if(mins <= 30) {
        phaseMin= map(mins, 0, 30, -diamMin / 2, diamMin / 2);
    } else {

        phaseMin = map(mins, 30, 60, diamMin / 2, -diamMin / 2);
    }
    let phaseHour;
    if (hrs < 12) {    
    phaseHour = map(hrs, 0, 12, -diamHour / 2, diamHour / 2); 
} else {  
    phaseHour = map(hrs, 12, 24, diamHour / 2, -diamHour / 2);
}

    fill('#131862');
    ellipse(400 + phaseSec - diamSec / 2, ySec, diamSec, diamSec);
    ellipse(400 + phaseMin - diamMin / 2, yMin, diamMin, diamMin);
    ellipse(400 + phaseHour - diamHour / 2, yHour, diamHour, diamHour);
}
