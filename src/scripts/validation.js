
const showError = function (inputElement, formElement, validationConfig) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.classList.add(validationConfig.errorClass);
    errorElement.textContent = inputElement.validationMessage;
}

const hideError = function (inputElement, formElement, validationConfig) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
}


const checkInputValidity = function (inputElement, formElement, validationConfig) {
    const inputValidity = inputElement.validity;

    if (inputValidity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity('');
    }

    if (inputValidity.valid) {
        hideError(inputElement, formElement, validationConfig);
    } else {
        showError(inputElement, formElement, validationConfig);
    }
}

const disableButton = function (buttonElement, validationConfig) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass)
    buttonElement.disabled = 'disabled';
}

const enableButton = function (buttonElement, validationConfig) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validationConfig.inactiveButtonClass)
}

const toggleButtonState = function (buttonElement, isActive, validationConfig) {
    if(isActive) {
        enableButton(buttonElement, validationConfig);
    } else {
        disableButton(buttonElement, validationConfig);
    }
}

const setEventListeners = function (formElement, validationConfig) {
    const inputList = formElement.querySelectorAll(validationConfig.inputSelector);
    const submitButtonElement = formElement.querySelector(validationConfig.submitButtonSelector);

    toggleButtonState(submitButtonElement, formElement.checkValidity(), validationConfig);

    [...inputList].forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            toggleButtonState(submitButtonElement, formElement.checkValidity(), validationConfig);
            checkInputValidity(inputElement, formElement, validationConfig);
        })
    });

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
}

const enableValidation = function (validationConfig) {
    const formsList = document.querySelectorAll(validationConfig.formSelector);
    [...formsList].forEach((formElement) => {
        setEventListeners(formElement, validationConfig);
    });
}

function clearValidation (formElement, validationConfig) {
    const inputList = formElement.querySelectorAll(validationConfig.inputSelector);
    const submitButtonElement = formElement.querySelector(validationConfig.submitButtonSelector);

    toggleButtonState(submitButtonElement, formElement.checkValidity(), validationConfig);
    [...inputList].forEach((inputElement) => {
        hideError(inputElement, formElement, validationConfig);
    });
}

export { enableValidation, clearValidation };