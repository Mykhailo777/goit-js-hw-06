const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formSubmitData = {
    mail: formElements.email.value,
    password: formElements.password.value,
  };

  if (mail === '' || password === '') {
    return alert('Keep all data');
  }

  console.log(formSubmitData);
  event.currentTarget.reset();
}