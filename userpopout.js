var titlesVisible = false;
function handleClientLoad() {
    gapi.load('auth2', initSignIn);
}

function toggleTitles() {
    console.log('Toggle titles function called');

    var isUserSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();

    if( isUserSignedIn ) {
    var titles = document.querySelectorAll('.header .title.hidden');
    titles.forEach(function (title) {
        if (titlesVisible) {
            title.style.display = 'none';
        } else {
            title.style.display = 'block';
        }
    });

    titlesVisible = !titlesVisible;
} else {
    window.location.href = 'login.html';
}
}

handleClientLoad();
document.getElementById('userCircle').addEventListener('click', toggleTitles);