document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-message').innerText = 'Please enter a valid email.';
        return;
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('error-message').innerText = 'Please enter a valid 10-digit phone number.';
        return;
    }

    // Validate password (at least 6 characters)
    if (password.length < 6) {
        document.getElementById('error-message').innerText = 'Password must be at least 6 characters long.';
        return;
    }

    // Store user data in localStorage
    const user = { email, phone, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful! Redirecting to login page...');
    window.location.href = 'login.html';
});