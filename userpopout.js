function checkbutton() {
    const loggedIn = localStorage.getItem('loggedIn');
    
    if (loggedIn === 'true') {
        alert('User is logged in!');

        // Get all elements with the class "title-hidden"
        const hiddenTitles = document.querySelectorAll('.title-hidden');

        // Change the display status of each hidden title to "block"
        hiddenTitles.forEach(title => {
            title.style.display = 'block';
        });
    } else {
        alert('User is not logged in.');
        window.location.href = 'login.html';
    }
}




