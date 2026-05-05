document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("greeting").textContent =
        "Welcome " + name + "! Thanks for visiting my Fairlady 280Z page.";
});