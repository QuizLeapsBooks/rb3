function displayMessage() {
    alert('Wishing you a very Happy Raksha Bandhan!');
}

function initiateCall() {
    window.location.href = "tel:+911234567890"; // Replace with the mobile number you want to call
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

document.getElementById("wrist").addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.getElementById("wrist").addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var rakhi = document.getElementById(data);
    rakhi.style.position = 'absolute';
    rakhi.style.left = event.clientX - this.getBoundingClientRect().left - rakhi.clientWidth / 2 + 10 + 'px'; // Adjusted left position
    rakhi.style.top = event.clientY - this.getBoundingClientRect().top - rakhi.clientHeight / 2 + 20 + 'px'; // Adjusted top position
    
    // Show the Send Wishes button
    document.getElementById("sendWishesButton").style.display = "block";
});
