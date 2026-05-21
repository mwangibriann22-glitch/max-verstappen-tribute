// Set a target date for an upcoming race weekend (Year, Month-1, Day, Hour, Minute)
// Note: Months are 0-indexed in JS (0 = January, 4 = May, etc.)
const nextRaceDate = new Date(2026, 4, 22, 14, 0, 0).getTime();

// Update the countdown every single second
const countdownTimer = setInterval(function() {

    // Get today's local date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the target date
    const distance = nextRaceDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the HTML element with id="timer"
    const timerElement = document.getElementById("timer");
    
    if (timerElement) {
        timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
        // If the countdown is finished, display a race weekend message
        if (distance < 0) {
            clearInterval(countdownTimer);
            timerElement.innerHTML = "LIGHTS OUT AND AWAY WE GO! Race Weekend is Live.";
        }
    }
}, 1000);