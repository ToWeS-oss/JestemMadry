var _Date = setInterval(function () {
	_GetDate();
}, 1);

function _GetDate() {
	var today = new Date();
	var date =
		today.getFullYear() +
		'-' +
		(today.getMonth() + 1) +
		'-' +
		today.getDate();
	var element = document.getElementById('currentDate');
	element.innerHTML = date;
}

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

const getBMI = (weight, height) => {
	let bmi = (weight / ((height * height) / 10000)).toFixed(2); //height in cm and weight in kg
	var output = '';
	if (bmi < 18.6)
		output = `You have under weight : <span>${bmi}</span>`;
	else if (bmi >= 18.6 && bmi < 24.9)
		output = `You have normal weight: <span>${bmi}</span>`;
	else output = `You have over weight : <span>${bmi}</span>`;
	return output;
};

const UsernameElement = document.querySelector('#login');
const EmailElement = document.querySelector('#email');
const PasswordElement = document.querySelector('#password');
const FirstName = document.querySelector('#fname');
const LastName = document.querySelector('#lname');
const form = document.querySelector('#register-form');
const displayError = (input, message) => {
	const formField = input.parentElement;
	formField.classList.remove('success');
	formField.classList.add('error');
	const error = formField.querySelector('small');
	error.textContent = message;
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
		displayError(firstName, 'First name cannot be blank.');
	} else if (!isBetween(firstName.length, min, max)) {
		displayError(
			firstName,
			`First name be between ${min} and ${max} characters.`,
		);
	} else {
		displayError(firstName);
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
		displayError(lastName, 'Last name cannot be blank.');
	} else if (!isBetween(lastName.length, min, max)) {
		displayError(
			lastName,
			`Last name must be between ${min} and ${max} characters.`,
		);
	} else {
		displayError(lastName);
		valid = true;
	}
	return valid;
};
form.addEventListener('submit', function (e) {
	e.preventDefault();

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

	if (isFormValid) {
		//tu jebniemy se kod
	}
});
