const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const form = document.getElementById("userForm");

// Validación de nombre (mínimo 3 letras)
nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        nameError.style.display = "block";
        nameInput.classList.add("error-border");
        nameInput.classList.remove("success-border");
    } else {
        nameError.textContent = "";
        nameError.style.display = "none";
        nameInput.classList.remove("error-border");
        nameInput.classList.add("success-border");
    }
});

// Validación de teléfono (10 dígitos)
phoneInput.addEventListener("input", () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent = "Phone must be 10 digits.";
        phoneError.style.display = "block";
        phoneInput.classList.add("error-border");
        phoneInput.classList.remove("success-border");
    } else {
        phoneError.textContent = "";
        phoneError.style.display = "none";
        phoneInput.classList.remove("error-border");
        phoneInput.classList.add("success-border");
    }
});

// Validación de email 
emailInput.addEventListener("input", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email address.";
        emailError.style.display = "block";
        emailInput.classList.add("error-border");
        emailInput.classList.remove("success-border");
    } else {
        emailError.textContent = "";
        emailError.style.display = "none";
        emailInput.classList.remove("error-border");
        emailInput.classList.add("success-border");
    }
});

// Al enviar el formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
        nameError.style.display === "none" &&
        phoneError.style.display === "none" &&
        emailError.style.display === "none"
    ) {
        alert("Form submitted successfully!");
        form.reset();

        // limpiar bordes al resetear
        nameInput.classList.remove("error-border", "success-border");
        phoneInput.classList.remove("error-border", "success-border");
        emailInput.classList.remove("error-border", "success-border");
    } else {
        alert("Please correct the errors before submitting.");
    }
});
