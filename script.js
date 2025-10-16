/*
Lichao Huang
10/15/2025
Assignment 4
*/

/* ------------------------ Name Validation ------------------------ */
const nameInput = document.getElementById("name");
const nameError = document.getElementById("ticketsError");

function validateName() {
    const value = nameInput.value.trim();
    if (value === "") {
        nameError.textContent = "Name cannot be empty.";
        return false;
    }

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

/* ------------------------ Button ------------------------ */
const submitButton = document.getElementById("button");

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const nameValid = validateName();
    const professionValid = validateProfession();
    const talentValid = validateTalent();
    const cityValid = validateCity();

    if (nameValid && professionValid && talentValid && cityValid) {
        alert("Character created successfully!");
    }
});