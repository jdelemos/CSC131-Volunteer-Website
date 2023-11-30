function signIn(){
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)

    let params = {
        "client_id": "725527432824-s08ru0mm5mfaf0omp6i56n3d8k6j32u7.apps.googleusercontent.com",
        "redirect_uri":"https://jdelemos.github.io/VW/index.html",
        "response_type":"token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile ",
        "include_granted_scopes":true,
        'state':'pass-through-value'
    }

    for(var p in params){
        let input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', p)
        input.setAttribute('value',params[p])
        form.appendChild(input)
    }

    document.body.appendChild(form)

    form.submit()
}
function signOut() {
    // Remove the user's session data from localStorage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('accessToken');

    // Redirect to the home page or a specific page after logging out
    window.location.href = 'https://jdelemos.github.io/VW/index.html';
}
function handleLoginState() {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        // User is logged in, fetch user info and check admin status
        fetchUserProfileAndCheckAdmin(accessToken);
    } else {
        // Handle the URL fragment if the user is not logged in
        const fragment = window.location.hash.substring(1);
        const params = parseFragment(fragment);

        if (params['access_token']) {
            // Set the access token in local storage and handle user info
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('accessToken', params['access_token']);
            fetchUserProfileAndCheckAdmin(params['access_token']);
        }
    }
}

function parseFragment(fragment) {
    return fragment.split('&').reduce((acc, param) => {
        const [key, value] = param.split('=');
        acc[key] = value;
        return acc;
    }, {});
}

function fetchUserProfileAndCheckAdmin(token) {
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem('googleId', data.id);
        checkAdminStatus(data.id);
    })
    .catch(error => {
        console.error('Error fetching user info:', error);
    });
}

function checkAdminStatus(googleId) {
    fetch('https://vast-wave-12355-e83778ef23ea.herokuapp.com/user-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ googleId: googleId })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(userData => {
        if (userData.Admin === 1) {
            window.location.href = '/events';
        } else {
            window.location.href = '/apply';
        }
    })
    .catch(error => {
        console.error('Error checking admin status:', error);
    });
}

// Call the function to handle login state when the page loads
handleLoginState();
