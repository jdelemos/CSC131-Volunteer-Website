function checkLogin() {
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
        alert('User is logged in!');
    } else {
        alert('User is not logged in.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Call the function to handle login state when the page loads
    handleLoginState();
});
