$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        
        const email = $('#email').val();
        const password = $('#password').val();

        console.log('Sending data:', { email: email, password: password });

        $.ajax({
            url: './php/login.php',
            type: 'POST',
            data: {
                email: email,
                password: password
            },
            success: function(response) {
                console.log('response', response)
                const res = JSON.parse(response);
                if (res.status === 'success') {
                    localStorage.setItem('userEmail', email);
                    window.location.href = 'profile.html';
                } else {
                    localStorage.setItem('userEmail', email);
                    alert('Login failed: ' + res.message);
                }
            },
            error: function(xhr, status, error) {
                console.error('AJAX error:', status, error);
            }
        });
    });

    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        $('#loginEmail').text(userEmail);
    }
});
