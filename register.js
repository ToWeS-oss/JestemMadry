const isBetween = (length, min, max) =>
	length < min || length > max ? false : true;

const isEmailValid = (email) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //checking if email meets the requirement
	return re.test(email);
};
const isPasswordSecure = (password) => {
	const re = new RegExp(
		'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
	); //checking if password meets the requirement
	return re.test(password);
};

const isEmpty = (value) => (value === '' ? false : true);

const UsernameElement = document.getElementById("login");
const EmailElement = document.getElementById('email');
const PasswordElement = document.getElementById('password');
const FirstName = document.getElementById('fname');
const LastName = document.getElementById('lname');

const displayError = (input, message) => {
    console.log(input.id+"Error");
    document.getElementById(input.id+"Error").innerHTML = message;
};

const checkUsername = () => {
	let valid = false;
	const min = 5,
		max = 25;
	const username = UsernameElement.value.trim();

	if (!isEmpty(username)) {
		displayError(UsernameElement, 'Username cannot be blank.');
	} else if (!isBetween(username.length, min, max)) {
		displayError(
			UsernameElement,
			`Username must be between ${min} and ${max} characters.`,
		);
	} else {
		displayError(UsernameElement);
		valid = true;
	}
	return valid;
};

const checkEmail = () => {
	let valid = false;
	const email = EmailElement.value.trim();
	if (!isEmpty(email)) {
		displayError(EmailElement, 'Email cannot be blank.');
	} else if (!isEmailValid(email)) {
		displayError(EmailElement, 'Email is not valid.');
	} else {
		displayError(EmailElement);
		valid = true;
	}
	return valid;
};

const checkPassword = () => {
	let valid = false;

	const password = PasswordElement.value.trim();

	if (!isEmpty(password)) {
		displayError(PasswordElement, 'Password cannot be blank.');
	} else if (!isPasswordSecure(password)) {
		displayError(
			PasswordElement,
			'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)',
		);
	} else {
		displayError(PasswordElement);
		valid = true;
	}

	return valid;
};

const checkFirstName = () => {
	let valid = false;
	const min = 3,
		max = 25;
	const firstName = FirstName.value.trim();
	if (!isEmpty(firstName)) {
		displayError(FirstName, 'First name cannot be blank.');
	} else if (!isBetween(firstName.length, min, max)) {
		displayError(
			FirstName,
			`First name must be between ${min} and ${max} characters.`,
		);
	} else {
		displayError(FirstName);
		valid = true;
	}
	return valid;
};
const checkLastName = () => {
	let valid = false;
	const min = 3,
		max = 25;
	const lastName = LastName.value.trim();

	if (!isEmpty(lastName)) {
		displayError(LastName, 'Last name cannot be blank.');
	} else if (!isBetween(lastName.length, min, max)) {
		displayError(
			LastName,
			`Last name must be between ${min} and ${max} characters.`,
		);
	} else {
		displayError(LastName);
		valid = true;
	}
	return valid;
};

function validate(){

	let isUsernameValid = checkUsername(),
		isEmailValid = checkEmail(),
		isPasswordValid = checkPassword(),
		isFirstNameValid = checkFirstName(),
		isLastNameValid = checkLastName();

	let isFormValid =
		isUsernameValid &&
		isEmailValid &&
		isPasswordValid &&
		isConfirmPasswordValid &&
		isFirstNameValid &&
		isLastNameValid;
    return isFormValid;
};
