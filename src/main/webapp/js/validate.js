function showError(input, message) {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}

function showSuccess(input) {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

function check_x() {
    let valid;

    const xButtons = document.querySelectorAll('input[id="form:x_value"]:checked');
    if (xButtons.length === 1) {
        showSuccess(xButtons[0]);
        valid = true;
    } else {
        showError(document.querySelector('input[name="x"]'), "Please, select any x value");
        valid = false;
    }
    return valid;
}

function check_y() {
    let valid;

    const yElement = document.getElementById("y");
    const y = yElement.value;
    if (isNaN(y) || isNaN(parseFloat(y))) {
        showError(yElement, "Please, enter number");    
        valid = false;
    } else if (parseFloat(y) < -5 || parseFloat(y) > 5) {
        showError(yElement, "Please, enter number in range {-5, 5}");
        valid = false;
    } else {
        showSuccess(yElement);
        valid = true;
    }
    return valid;
}

function check_r() {
    let valid = false;
    $('.r_buttons input[type="button"]').each(function () {
        let currentButton = $(this);
        if (currentButton.hasClass("pressed")) {
            valid = true;
        }
    });
    return valid;
}

function validate_form() {
    set_timezone();
    let isXValid = check_x(), isYValid = check_y(), isRValid = check_r();
    return isXValid && isYValid && isRValid;
}