document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('./php/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                email: email,
                name: name,
                password: password
            })
        });

        const result = await response.json();
        const messageDiv = document.getElementById('message');
        
        if (result.status === 'success') {
            messageDiv.textContent = 'User registered successfully! Redirecting to login page...';
            messageDiv.style.color = 'green';
            setTimeout(() => {
                window.location.href = 'login.html'; // Change to your login page URL
            }, 2000); // Redirect after 2 seconds
        } else {
            messageDiv.textContent = result.message;
            messageDiv.style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'An error occurred. Please try again.';
        messageDiv.style.color = 'red';
    }
});
