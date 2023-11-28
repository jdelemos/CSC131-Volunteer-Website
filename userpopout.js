//var titlesVisible = false;


 //   var titles = document.querySelectorAll('.header .title.hidden');
  //  titles.forEach(function (title) {
   //     if (titlesVisible) {
    //        title.style.display = 'none';
    //    } else {
    //        title.style.display = 'block';
    //    }
   // });

   // titlesVisible = !titlesVisible;
//} else {
//    window.location.href = 'login.html';
//}
//}

//document.getElementById('userCircle').addEventListener('click', toggleTitles);

function checkLogin() {
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
        alert('User is logged in!');
    } else {
        alert('User is not logged in.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Call the function to handle login state when the page loads
    handleLoginState();
});
</script>
