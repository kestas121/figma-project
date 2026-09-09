"use strict"

const form = document.querySelector(".contact-form");
const requiredFields = form.querySelectorAll("[required]");
const submitButton = form.querySelector('[type="submit"]');


console.log(requiredFields);

const validateForm = () => {
    let formValid = true;

    requiredFields.forEach((field) => {
        if (!field.value.trim()) {
            formValid = false;
        }

        submitButton.disabled = !formValid;

        if (formValid) {
            submitButton.classList.remove('inactive-btn');
        } else {
            submitButton.classList.add('inactive-btn');
        }
        submitButton.disabled = !formValid;
    })
}

requiredFields.forEach((field) => {
    console.log('pirma kart');

    if (!field.value.trim()) {
        submitButton.classList.add('inactive-btn');
    }
    field.addEventListener("blur", () => {
        const element = field.closest(".field-requirement");

        if (!field.value.trim()) {
            element.classList.add("error")
        } else {
            element.classList.remove("error");

        }
        validateForm();
    });
});


requiredFields.forEach((field) => {
    field.addEventListener("input", () => {
        const element = field.closest(".field-requirement");

        if (field.value.trim()) {
            element.classList.remove("error")
        }
        validateForm();
    });
});

form.addEventListener("submit", (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
});