const INPUT_EMAIL = document.getElementById('email');
const INPUT_PASSWORD = document.getElementById('password');
const BTN_SUBMIT = document.querySelector('.login-button');

BTN_SUBMIT.addEventListener('click', (e)=>{
   e.preventDefault();

   let email = INPUT_EMAIL.value.trim();
   let password = INPUT_PASSWORD.value.trim();

   console.log(email);
   console.log(password);
   
   

   if(email === 'test@test.be' && password === 'Test1234='){
      window.location.href = './platform.html';
   }
   else {
      //todo faire apparaitre span erreur
   }

});
//also remeber the school screen is 1600px su 9000circa , 1700 su 1000.
  

  



