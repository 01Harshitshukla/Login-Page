
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let isValid = true;

        // Reset error messages
        usernameError.textContent = '';
        usernameError.classList.remove('show');
        passwordError.textContent = '';
        passwordError.classList.remove('show');

        // Basic client-side validation
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            usernameError.classList.add('show');
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            passwordError.classList.add('show');
            isValid = false;
        } else if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            passwordError.classList.add('show');
            isValid = false;
        }

        if (isValid) {
            // In a real application, you would send this data to a server
            // for authentication (e.g., using fetch API or XMLHttpRequest).
            // For now, let's just log it and simulate success.
            console.log('Form submitted successfully!');
            console.log('Username:', usernameInput.value);
            console.log('Password:', passwordInput.value);

            // You could redirect the user or show a success message
            alert('Login successful! (This is a demo, no actual authentication performed)');
            // window.location.href = '/dashboard.html'; // Example redirect
        }
    });

    // Optional: Add real-time validation feedback as user types
    usernameInput.addEventListener('input', function() {
        if (usernameInput.value.trim() !== '') {
            usernameError.textContent = '';
            usernameError.classList.remove('show');
        }
    });

    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.trim() !== '') {
            passwordError.textContent = '';
            passwordError.classList.remove('show');
        }
    });
});
