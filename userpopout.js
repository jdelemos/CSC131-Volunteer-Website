function checkbutton() {
    const loggedIn = localStorage.getItem('loggedIn');
    
    if (loggedIn === 'true') {
    var titles = document.querySelectorAll('.header .title.hidden');    
    titles.forEach(function (title) {
       if (titlesVisible) {
            title.style.display = 'none';
        } else {
            title.style.display = 'block';
        });
    } else {
        window.location.href = 'login.html';
    }
}

document.getElementById('userCircle').addEventListener('click', toggleTitles);
// Ensure that handleLoginState is called after the document has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Call the function to handle login state when the page loads
    handleLoginState();
});


