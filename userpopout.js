
        function checkbutton() {
            // Retrieve the 'loggedIn' value from localStorage
            const loggedIn = localStorage.getItem('loggedIn');

            // Get the user button, and options
            const userButton = document.getElementById('userButton');
            const option1 = document.querySelector('.option1');
            const option2 = document.querySelector('.option2');

            // Function to show options
            function showOptions() {
                option1.style.display = 'block';
                option2.style.display = 'block';
            }

            // Function to hide options
            function hideOptions() {
                option1.style.display = 'none';
                option2.style.display = 'none';
            }

            // Check if the user is logged in
            if (loggedIn === 'true') {
                // If logged in, show additional options
                showOptions();

                // Add a click event listener to the user button
                userButton.addEventListener('click', function (event) {
                    // Toggle options visibility when the user button is clicked
                    if (option1.style.display === 'none' && option2.style.display === 'none') {
                        showOptions();
                    } else {
                        hideOptions();
                    }

                    // Prevent the click event from propagating to the document
                    event.stopPropagation();
                });

                // Add a click event listener to the document body
                document.body.addEventListener('click', function hideOptionsOutside() {
                    // Hide the options when the user clicks anywhere else on the page
                    hideOptions();
                });
            } else {
                // If not logged in, redirect to the login page when the user button is clicked
                userButton.addEventListener('click', function redirectToLogin() {
                    window.location.href = 'login.html';
                });
            }
        }

        // Call the function when the page loads
        checkbutton();
