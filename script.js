/*
Lichao Huang
10/15/2025
Assignment 4
*/

/* ------------------------ Name input(use regex) ------------------------ */
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

function validateName() {
    const value = nameInput.value.trim();
    if (value === "") {
        nameError.textContent = "Name cannot be empty.";
        return false;
    }

    // regex validation(only letter, space and hyphen)
    const regexName = /^[A-Za-z\s-]+$/;

        if (!regexName.test(value)) {
        nameError.textContent = "Name can only contain letters, space and hyphen.";
        return false;
    }


    nameError.textContent = "";
    return true;
}

/* ------------------------ Profession Validation ------------------------ */
const professionInputs = document.getElementsByName("profession");
const professionError = document.getElementById("professionError");

function validateProfession() {
    for (let input of professionInputs) {
        if (input.checked) {
            professionError.textContent = "";
            return true;
        }
    }
    professionError.textContent = "Please select a profession.";
    return false;
}

/* ------------------------ Talent Validation ------------------------ */
const talentInputs = document.getElementsByName("talent");
const talentError = document.getElementById("talentError");

function validateTalent() {
    for (let input of talentInputs) {
        if (input.checked) {
            talentError.textContent = "";
            return true;
        }
    }
    talentError.textContent = "Please select at least one talent.";
    return false;
}

/* ------------------------ City Validation ------------------------ */
const citySelect = document.getElementById("eventType");
const cityError = document.getElementById("cityError");

function validateCity() {
    if (citySelect.value === "") {
        cityError.textContent = "Please select a city.";
        return false;
    }
    cityError.textContent = "";
    return true;
}

/* ------------------------ age input(use regex) ------------------------ */
const ageInput = document.getElementById("age");
const ageError = document.getElementById("ageError");

function validateAge() {
    const value = ageInput.value.trim();

    if (value === "") {
        ageError.textContent = "Age cannot be empty.";
        return false;
    }

    // regex validation(positive and numeric)
    const regexAge = /^[1-9]\d*$/;
    if (!regexAge.test(value)) {
        ageError.textContent = "Age must be a positive number.";
        return false;
    }

    ageError.textContent = "";
    return true;
}


/* ------------------------ email input(use regex) ------------------------ */
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");


function validateEmail() {
    const value = emailInput.value.trim();

    if (value === "") {
        emailError.textContent = "Email cannot be empty.";
        return false;
    }

    // regex validation(email format)
    const complexEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!complexEmailPattern.test(value)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }

    emailError.textContent = "";
    return true;
}


/* ------------------------ Button ------------------------ */
const form = document.getElementById("characterForm");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameValid = validateName();
    const professionValid = validateProfession();
    const talentValid = validateTalent();
    const cityValid = validateCity();
    const ageValid = validateAge();
    const emailValid = validateEmail();

    if (nameValid && professionValid && talentValid && cityValid && ageValid && emailValid) {
        alert("Character created successfully!");
        form.submit();
    }
});