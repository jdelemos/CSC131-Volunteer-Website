function checkbutton() {
    // Retrieve the 'loggedIn' value from localStorage
    const loggedIn = localStorage.getItem('loggedIn');
    
    // Get all elements with the class "title-hidden"
    const hiddenTitles = document.querySelectorAll('.title-hidden');

    // Check if the user is logged in
    if (loggedIn === 'true') {
        alert('User is logged in!');

        // Initially hide the elements
        hiddenTitles.forEach(title => {
            title.style.display = 'none';
        });

        // Add a click event listener to the document
        document.addEventListener('click', function toggleTitles(event) {
            // Check if the click target is the button
            if (event.target.classList.contains('circle')) {
                // Toggle the display status of each hidden title
                hiddenTitles.forEach(title => {
                    title.style.display = (title.style.display === 'none' || title.style.display === '') ? 'block' : 'none';
                });
            } else {
                // If the click is anywhere else on the page, hide the elements
                hiddenTitles.forEach(title => {
                    title.style.display = 'none';
                });
            }
        });
    } else {
        // If the user is not logged in, display an alert and redirect to the login page
        alert('User is not logged in.');
        window.location.href = 'login.html';
    }
}
