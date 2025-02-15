// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁️'; // Change icon to "hide" state
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '🙈'; // Change icon to "show" state
    }
}

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get stored data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to the main page
    } else {
        document.getElementById('error-message').innerText = 'Invalid email or password';
    }
});