function checkbutton() {
    const loggedIn = localStorage.getItem('loggedIn');
    
    if (loggedIn === 'true') {
        console.log("Hello world!");
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

document.getElementById('userCircle').addEventListener('click', toggleTitles);



