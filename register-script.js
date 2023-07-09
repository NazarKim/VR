document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector(".form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let fullName = document.querySelector('input[placeholder="Full Name"]');
        let email = document.querySelector('input[placeholder="Email"]');
        let password = document.querySelector('input[placeholder="Password"]');

        if (fullName.value.length < 4) {
            fullName.classList.add("error");
            return;
        } else {
            fullName.classList.remove("error");
        }

        if (email.value == ""){
            email.classList.add("error")
            return;
        } else {
            email.classList.remove("error");
        }

        if (password.value.length < 6 || password.value.length > 16) {
            password.classList.add("error");
            return;
        } else {
            password.classList.remove("error");
        }

        if (fullName.value && email.value && password.value) {
            window.location.href = "index.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
});
