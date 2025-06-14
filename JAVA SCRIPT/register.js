// This is an example of how to add JavaScript validation to the form


const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (email === '' || username === '' || password === '') {
    alert('Please fill in all the required fields');
    return;
  }
  else{
    alert('Thank you, your id has been created.')
  }

  // Add your logic to submit the form data to the server here
});
