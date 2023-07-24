"use strict";

const emailInput = document.getElementById('email');
const submitBtn = document.querySelector('.submit-btn');
emailInput.addEventListener("focus",()=> {
	emailInput.style.borderColor = 'var(--neutral-4)'
});

emailInput.addEventListener("blur",()=> {
	emailInput.style.borderColor = 'var(--neutral-2)'
});


///////////////////////////////////////////////////////////////////////////////////

const singUpScreen = document.querySelector('.sign-up-state');
const successScreen = document.querySelector('.success-state');
const showEmail = document.querySelector('.show-email');

submitBtn.addEventListener("click",(e)=> {
	e.preventDefault();
	validEmail(emailInput.value);

	if (validEmail(emailInput.value)) {
		successScreen.classList.add('scale-up');

		singUpScreen.style.display = 'none';
		successScreen.style.display = 'grid';

		showEmail.textContent = `${emailInput.value}`;
	}
});

const validEmail = (email)=> {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const errorText = document.querySelector('.error-text');
	if (email == "") {
  		errorText.textContent = `Can't be empty`;
  		emailInput.style.borderColor = 'var(--primary)';
  		emailInput.style.background = 'var(--secondary)';

	} else if (!emailRegex.test(email)) {
  		errorText.textContent = `Please, provide a valid email`;
  		emailInput.style.borderColor = 'var(--primary)';
  		emailInput.style.background = 'var(--secondary)';
	} else {
		errorText.textContent = ``;
		emailInput.style.borderColor = 'var(--neutral-2)';
  		emailInput.style.background = 'var(--neutral-1)';
  		return true;
	}
}

///////////////////////////////////////////////////////////////////////////////////

const closeMessage = document.querySelector('.close');

closeMessage.addEventListener("click",(e)=> {
	e.preventDefault();
	validEmail(emailInput.value);

	singUpScreen.classList.add('scale-up');

	singUpScreen.style.display = 'flex';
	successScreen.style.display = 'none';
});