var titlesVisible = false;

function checkLogin(){
    var titles = document.querySelectorAll('.header .title.hidden');

    if(loggedin){
    titles.forEach(function (title) {
        if (titlesVisible) {
            title.style.display = 'none';
        } else {
            title.style.display = 'block';
        }
    });
    }
    titlesVisible = !titlesVisible;
} else {
    window.location.href = 'login.html';
}
handleLoginState();
}

document.getElementById('userCircle').addEventListener('click', toggleTitles);
document.addEventListener('DOMContentLoaded', function() {
