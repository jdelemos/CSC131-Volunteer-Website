function checkLoginAndRedirect() {
    // Retrieve the isLoggedIn value or default to 'false' if the key is missing
    const isLoggedIn = localStorage.getItem('isLoggedIn') || 'false';
    console.log(isLoggedIn);
    // Redirect to the login page if isLoggedIn is not 'true'
    if (isLoggedIn !== 'true') {
        const restrictedUrls = [
            '/restricted-page1.html',
            '/restricted-page2.html',
            '/restricted-page3.html',
            // ... other restricted URLs
        ];
        const currentPage = window.location.pathname;
        if (restrictedUrls.includes(currentPage)) {
            alert('You must be logged in to view this page.');
            window.location.href = '/login.html'; // Redirect to the login page
        }
    }
}

document.addEventListener('DOMContentLoaded', checkLoginAndRedirect);
