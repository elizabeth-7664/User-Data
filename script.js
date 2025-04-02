document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const messageDiv = document.createElement("div"); 
    document.body.appendChild(messageDiv);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page refresh
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        submitData(name, email);
    });

    function submitData(name, email) {
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ name, email })
        })
        .then(response => response.json())
        .then(data => {
            messageDiv.textContent = `User ID: ${data.id}`;
            messageDiv.style.color = "green"; 
        })
        .catch(error => {
            messageDiv.textContent = `Error: ${error.message}`;
            messageDiv.style.color = "red";
        });
    }
});
