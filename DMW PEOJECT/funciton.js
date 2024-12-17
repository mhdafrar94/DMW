  function isAdult(birthDate) {
            const today = new Date();
            const birthDateObj = new Date(birthDate);
            const age = today.getFullYear() - birthDateObj.getFullYear();
            const month = today.getMonth() - birthDateObj.getMonth();
            
            // If the user hasn't had their birthday this year yet, subtract 1 from the age
            if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
                return age - 1;
            }
            return age;
        }

        // Handle form submission
        const registerForm = document.getElementById("registerForm");
        registerForm.addEventListener("submit", function(event) {
            const dob = document.getElementById("dob").value;
            const age = isAdult(dob);

            // Check if the user is under 18
            if (age < 18) {
                // Prevent form submission
                event.preventDefault();
                
                // Show error message
                document.getElementById("age-error").style.display = "block";
            }
        });

        // Show Register Form when Register button is clicked
        document.getElementById('register-btn').addEventListener('click', () => {
            document.getElementById('register-form').style.display = 'block';
            document.getElementById('signin-form').style.display = 'none';
            document.getElementById('contact-info').style.display = 'none';
            document.getElementById('home-content').style.display = 'none';  // Hide home content
        });

        // Show Sign In Form when Sign In button is clicked
        document.getElementById('signin-btn').addEventListener('click', () => {
            document.getElementById('signin-form').style.display = 'block';
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('contact-info').style.display = 'none';
            document.getElementById('home-content').style.display = 'none';  // Hide home content
        });

        // Show Contact Info when Contact button is clicked
        document.getElementById('contact-btn').addEventListener('click', () => {
            document.getElementById('contact-info').style.display = 'block';
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('signin-form').style.display = 'none';
            document.getElementById('home-content').style.display = 'none';  // Hide home content
        });

        // Ensure Home section is displayed by default when the page loads
        window.onload = function () {
            document.getElementById('home-content').style.display = 'block';
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('signin-form').style.display = 'none';
            document.getElementById('contact-info').style.display = 'none';
        };// JavaScript Document