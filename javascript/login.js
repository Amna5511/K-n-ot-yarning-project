const INPUT_EMAIL = document.getElementById('email');
const INPUT_PASSWORD = document.getElementById('password');
const BTN_SUBMIT = document.querySelector('.login-button');
const ERROR_SPAN = document.querySelector('.form-group span');

BTN_SUBMIT.addEventListener('click', (e) => {
   e.preventDefault();

   let email = INPUT_EMAIL.value.trim();
   let password = INPUT_PASSWORD.value.trim();

   console.log(email);
   console.log(password);



   if (email === 'test@test.be' && password === 'Test1234=') {
      window.location.href = './platform.html';
   }
   else {
      ERROR_SPAN.textContent = 'Email ou mot de passe incorrect';
      ERROR_SPAN.style.display = 'block';

   }

});







