function checkbutton() {
    const loggedIn = localStorage.getItem('loggedIn');
    
    if (loggedIn === 'true') {
    var titles = document.querySelectorAll('.header .title.hidden');    
    titles.forEach(function (title) {
       if (titlesVisible) {
            title.style.display = 'none';
        } else {
            title.style.display = 'block';
        }}
        );
    } else {
        window.location.href = 'login.html';
    }
}



