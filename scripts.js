document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;

    if (fullName && email && dob) {
        const membershipNumber = generateMembershipNumber();
        document.getElementById('membershipNumber').innerHTML = `Thank you for registering! Your membership number is: ${membershipNumber}`;
    } else {
        alert('Please fill out all required fields.');
    }
});

function generateMembershipNumber() {
    const randomNum = Math.floor(100 + Math.random() * 900); // Generate 3-digit random number
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // Get last two digits of the year
    return `${year}-${randomNum}`;
}
