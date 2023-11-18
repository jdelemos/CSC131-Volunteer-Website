function signIn(){
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)

    let params = {
        "client_id": "725527432824-s08ru0mm5mfaf0omp6i56n3d8k6j32u7.apps.googleusercontent.com",
        "redirect_uri":"https://06cd-2601-204-d384-1c30-f578-1094-3a7d-a0e4.ngrok-free.app/profile.html",
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