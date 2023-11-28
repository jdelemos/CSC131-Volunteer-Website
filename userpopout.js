function checkbutton() {
    const titleHidden1 = document.getElementById('update');
    const titleHidden2 = document.getElementById('signout');

    function showTitles() {
        if (titleHidden1 && titleHidden2) {
            titleHidden1.style.display = 'block';
            titleHidden2.style.display = 'block';
        } else {
            console.error('One or more titleHidden elements not found.');
        }
    }

    function hideTitles() {
        if (titleHidden1 && titleHidden2) {
            titleHidden1.style.display = 'none';
            titleHidden2.style.display = 'none';
        } else {
            console.error('One or more titleHidden elements not found.');
        }
    }

    // Check if the user is logged in
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
        // If logged in, toggle titles visibility
        if (titleHidden1.style.display === 'none' && titleHidden2.style.display === 'none') {
            showTitles();
        } else {
            hideTitles();
        }
    } else {
        // If not logged in, redirect to the login page
        window.location.href = 'login.html';
    }
}

// Function to handle the login state
function handleLoginState() {
    const loggedIn = localStorage.getItem('loggedIn');
    const userButton = document.getElementById('userButton');

    if (loggedIn === 'true') {
        // User is logged in, handle the state accordingly
        userButton.addEventListener('click', function (event) {
            checkbutton();
            event.stopPropagation();
        });
    } else {
        // User is not logged in, handle the state accordingly
        userButton.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }
}

// Call the handleLoginState function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    handleLoginState();
});
