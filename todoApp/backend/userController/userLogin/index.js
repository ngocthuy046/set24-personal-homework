document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.querySelector('#login-form form');
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            console.log('Users in LocalStorage:', users);

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                alert('Login successful!');
                loginForm.setAttribute('action', '/frontend/index.html')
            } else {
                alert('Invalid email or password!');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
})