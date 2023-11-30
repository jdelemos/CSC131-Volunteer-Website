function checkLoginAndRedirect() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Assuming 'false' or a null value indicates the user is not logged in
    if (isLoggedIn !== 'true') {
        // Define a list of restricted URLs
        const restrictedUrls = [
            '/apply.html',
            '/account.htmls',
            '/events.html',
            // Add other restricted URLs here
        ];

        // Get the current page URL
        const currentPage = window.location.pathname;

        // Check if the current page is in the list of restricted URLs
        if (restrictedUrls.includes(currentPage)) {
            alert('You must be logged in to view this page.');
            window.location.href = '/login.html'; // Redirect to the login page
        }
    }
}

// Run the function on every page load
document.addEventListener('DOMContentLoaded', checkLoginAndRedirect);