const form = document.getElementById("form");
const first_name = document.getElementById("firstname");
const last_name = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone_number = document.getElementById("phonenumber");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirmpassword");
// const button = document.getElementById("button");
password.type = "password";
confirm_password.type = "password";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkValidity();
});

const setError = (element, message) => {
    let input_control = element.parentElement;
    const error_display = input_control.querySelector(".error");

    error_display.innerText = message;
    input_control.classList.add("error");
    input_control.classList.remove("success");
};

const setSuccess = (key) => {
    const input_control = key.parentElement;
    const error_display = input_control.querySelector(".error");

    error_display.innerText = "";
    input_control.classList.remove("error");
    input_control.classList.add("success");
};

const isValidName = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
};

const isValidEmail = (email) => {
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email_regex.test(email);
};

const isPasswordCorrect = (password) => {
    const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,25}$/;
    return password_regex.test(password);
};

const hasWhiteSpace = (string) => {
    return /\s/g.test(string);
}
const isPhoneNumberValid =(number) => {
    return /^(0|91)?[6-9][0-9]{9}$/gi.test(number);
}

const checkValidity = () => {
    const fields = [
        first_name,
        last_name,
        username,
        email,
        phone_number,
        password,
        confirm_password,
    ];

    fields.forEach((field) => {
        const value = field.value.trim();

        if (value === "") {
            setError(field, "This field is required.");
        }
        else if (hasWhiteSpace(value)) {
            setError(field, "No spaces are allowed in between");
        }
        else if((field===first_name||field===last_name) && !isValidName(value))
        {
            setError(field,"Invaild characters")
        }
        else if (field === email && !isValidEmail(value)) {
            setError(field, "Provide a vaild email address");
        } 
        else if(field === phone_number && !isPhoneNumberValid(value))
        {
            setError(field,"Invaild phone number.");
        }
        else if (field === password && !isPasswordCorrect(value)) 
        {
            setError(field,"*password must contain an uppercase character a lowercase character a number and the special character. The length should be between 8 and 25 character. ");
        } 
        else if (field === confirm_password && value !== password.value) 
        {
            setError(field, "*does not match");
        } else {
            setSuccess(field);
        }
    });
};
