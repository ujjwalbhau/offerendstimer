// setCookie("discountClosed","true",24);
countdownTimeStart();
const hours= document.querySelector(".value-hrs");
const minutes= document.querySelector(".value-mins");
const seconds= document.querySelector(".value-secs");


function countdownTimeStart(){

    var countDownDate = new Date("Sep 25, 2025 15:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secondsValue = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        // document.getElementById("demo").innerHTML = hours + "h "
        // + minutes + "m " + seconds + "s ";
       console.log(hoursValue);
        hours.innerHTML=hoursValue;
        minutes.innerHTML=minutesValue;
        seconds.innerHTML=secondsValue;
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            // document.getElementById("demo").innerHTML = "EXPIRED";
            countdownTimeStart();
        }


    }, 1000);
}