document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulated user data (replace with your actual data)
        const userData = {
            'user1': { password: 'password1', paidFees: true },
            'user2': { password: 'password2', paidFees: false }
        };

        // Check if the username exists and the password matches
        if (userData.hasOwnProperty(username) && userData[username].password === password) {
            // Check if the user has paid fees
            if (userData[username].paidFees) {
                window.location.href = 'course_reg.html';
            } else {
                window.location.href = 'index.html';
            }
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
