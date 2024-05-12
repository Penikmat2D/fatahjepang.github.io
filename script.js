document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'admin' && password === 'DTK978') {
        alert('Verification successful!');

        window.location.href = 'https://www.roblox.com/'
    }
    else {
        alert('Invalid username or password. Please try again.')
    }
});

document.getElementById("darkModeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});

function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    hours = (hours === 0) ? 12 : hours;

    var clockDiv = document.getElementById("clock");
    clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(displayTime, 1000);

displayTime();
  
