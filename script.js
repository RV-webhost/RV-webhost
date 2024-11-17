// JavaScript to toggle the hamburger menu
document.querySelector('.hamburger').addEventListener('click', function () {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});


// Function to search for a bloodbank based on location
function searchBloodbank() {
    const location = document.getElementById("location").value;
    if (location) {
        alert(`Searching for bloodbanks near ${location}`);
        // Placeholder: Implement actual search functionality here
    } else {
        alert("Please enter a location to search for bloodbanks.");
    }
}

// Function to register a donor
function registerDonor(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const bloodGroup = document.getElementById("blood-group").value;
    const contact = document.getElementById("contact").value;

    if (name && bloodGroup && contact) {
        alert(`Thank you, ${name}. You have been registered as a donor with blood group ${bloodGroup}.`);
        // Placeholder: Implement actual donor registration functionality here
    } else {
        alert("Please fill in all fields to register as a donor.");
    }
}

// Function to handle contact form submission
document.querySelector('.Contact .form button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name && phone && email) {
        alert(`Thank you, ${name}. We will contact you shortly.`);
        // Placeholder: Implement actual form submission functionality here
    } else {
        alert("Please fill in all fields to contact us.");
    }
});
