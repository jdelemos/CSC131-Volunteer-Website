function signIn(){
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)

    let params = {
        "client_id": "725527432824-s08ru0mm5mfaf0omp6i56n3d8k6j32u7.apps.googleusercontent.com",
        "redirect_uri":"https://jdelemos.github.io/VW/test.html",
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
function handleLoginState() {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
        // User is logged in
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('accessToken', accessToken);
    }
}

// Call the function to handle login state when the page loads
handleLoginState();
//hi
