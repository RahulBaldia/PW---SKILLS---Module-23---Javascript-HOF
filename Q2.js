let delayInSeconds = 3;


function countdownAndGenerateNumber(delay) {
    let timeRemaining = delay;
    
    
    let intervalId = setInterval(function() {
        if (timeRemaining > 0) {
            console.log(`Time remaining: ${timeRemaining} seconds`);
            timeRemaining--;
        } else {
            clearInterval(intervalId);
            
            let randomNumber = Math.floor(Math.random() * 101);
            console.log(`Generated random number: ${randomNumber}`);
        }
    }, 1000);
}

countdownAndGenerateNumber(delayInSeconds);
