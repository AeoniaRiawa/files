document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});
