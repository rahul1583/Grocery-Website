// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Reset error messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formMessage.textContent = "";

        // Validate name
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Invalid email address";
            return;
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message is required";
            return;
        }

        // If all validations pass, display success message or submit the form
        formMessage.textContent = "Form submitted successfully!";
        // contactForm.submit(); // Uncomment this line to submit the form to the server
    });
});
