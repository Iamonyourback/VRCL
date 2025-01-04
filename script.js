document.addEventListener('DOMContentLoaded', function() {
    if (netlifyIdentity) {
        netlifyIdentity.on('init', user => updateUI(user));
        netlifyIdentity.on('login', user => updateUI(user));
        netlifyIdentity.on('logout', () => updateUI(null));
    }
});

function login() {
    netlifyIdentity.open('login');
}

function logout() {
    netlifyIdentity.logout();
}

function updateUI(user) {
    const loginBtn = document.querySelector('button[onclick="login()"]');
    const logoutBtn = document.querySelector('button[onclick="logout()"]');
    const content = document.getElementById('content');

    if (user) {
        content.innerHTML = `<p>Welcome, ${user.user_metadata.full_name}!</p>`;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        content.innerHTML = `<p>You need to log in to see the content.</p>`;
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}
