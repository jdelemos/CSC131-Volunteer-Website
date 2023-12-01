function signIn(){
        let serverAuthEndpoint = "https://vast-wave-12355-e83778ef23ea.herokuapp.com/auth/google";

    // Redirect the user to your server's authentication endpoint
    window.location.href = serverAuthEndpoint;
}
function signOut() {
    // Remove the user's session data from localStorage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('googleId');

    // Redirect to the home page or a specific page after logging out
    window.location.href = 'https://jdelemos.github.io/VW/index.html';
}
function handleLoginState() {
    // Get the fragment part of the URL
    const fragment = window.location.hash.substring(1);

    // Parse the fragment string
    const params = fragment.split('&').reduce((acc, param) => {
        const [key, value] = param.split('=');
        acc[key] = value;
        return acc;
    }, {});

    const accessToken = params['access_token'];

    if (accessToken) {
        // User is logged in
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('accessToken', accessToken);

        // Fetches user profile information to get their googleID
        fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // contains user information, including Google ID
            localStorage.setItem('googleId', data.id); // Storing the Google ID
            console.log('Google ID stored:', localStorage.getItem('googleId'));
             setTimeout(() => {
                window.location.href = 'https://jdelemos.github.io/VW/checkpoint.html';
            }, 1000);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });
    }
}


// Call the function to handle login state when the page loads
handleLoginState();
//hi
