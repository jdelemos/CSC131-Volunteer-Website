\function checkbutton() {
    // Retrieve the 'loggedIn' value from localStorage
    const loggedIn = localStorage.getItem('loggedIn');
    
    // Check if the user is logged in
    if (loggedIn === 'true') {
        alert('User is logged in!');

        // Get all elements with the class "title-hidden"
        const hiddenTitles = document.querySelectorAll('.title-hidden');

        // Change the display status of each hidden title to "block"
        hiddenTitles.forEach(title => {
            title.style.display = 'block';
        });

        // Add a click event listener to the document
        document.addEventListener('click', function hideTitles() {
            // Change the display status of each hidden title to "none" when any click occurs
            hiddenTitles.forEach(title => {
                title.style.display = 'none';
            });

            // Remove the click event listener after it's triggered (optional, depending on your needs)
            document.removeEventListener('click', hideTitles);
        });
    } else {
        // If the user is not logged in, display an alert and redirect to the login page
        alert('User is not logged in.');
        window.location.href = 'login.html';
    }
}
