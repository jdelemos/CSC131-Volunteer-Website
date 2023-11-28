function checkbutton() {
    const loggedIn = localStorage.getItem('loggedIn');
    
    if (loggedIn === 'true') {
        alert('User is logged in!');
    } else {
        alert('User is not logged in.');
        window.location.href = 'login.html';
    }
}




