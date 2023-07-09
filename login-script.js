document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector(".form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let nameInput = document.querySelector('input[placeholder="Name"]');
        let passwordInput = document.querySelector('input[placeholder="Password"]');

        let name = nameInput.value;
        let password = passwordInput.value;

        fetch("server", {
            method: "POST",
            body: JSON.stringify({ name: name, password: password }),

        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = "index.html";
                } else {
                    form.classList.add("error");
                }
            })
            .catch(error => {
                alert("server error", error);
            });
    });
});
