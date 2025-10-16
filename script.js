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
    nameError.textContent = "";
    return true;
}

/* ------------------------ Profession Validation ------------------------ */
const professionInputs = document.getElementsByName("profession");
const professionError = document.getElementById("professionError");

/* ------------------------ Talent Validation ------------------------ */
const talentInputs = document.getElementsByName("talent");
const talentError = document.getElementById("talentError");

/* ------------------------ City Validation ------------------------ */
const citySelect = document.getElementById("eventType");
const cityError = document.getElementById("cityError");

/* ------------------------ Button ------------------------ */
const submitButton = document.getElementById("button");