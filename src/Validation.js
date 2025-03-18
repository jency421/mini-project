document.getElementById('createAccountForm').addEventListener('input', function () {
    const name = document.getElementById('name').value.trim(); // Trim to avoid spaces-only validation
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const submitBtn = document.getElementById('submitBtn');

    // Enable/Disable the submit button based on validation
    const isValidName = name.length > 0;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simple email validation
    const isValidPassword = password.length >= 8;

    submitBtn.disabled = !(isValidName && isValidEmail && isValidPassword);
});

document.getElementById('createAccountForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validate fields before proceeding
    if (!name) {
        alert('Name is required.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Show success message and reset form
    document.getElementById('successMessage').textContent = 'Account created successfully!';
    document.getElementById('successMessage').classList.add('text-success'); // Optional: Add Bootstrap class
    document.getElementById('addAnotherBtn').style.display = 'inline-block';

    resetForm();
});

function resetForm() {
    document.getElementById('createAccountForm').reset();
    document.getElementById('submitBtn').disabled = true; // Disable the button after form reset
}
