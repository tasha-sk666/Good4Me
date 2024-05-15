import { validateForms } from './validation';

const rules = (parentSelector) => {
  return [
    {
      ruleSelector: `${parentSelector} input[type="email"]`,
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Enter you Email',
        }
        ,
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'It\'s too short',
        },
        {
          rule: 'email',
        },
      ]
    }
  ]
}

const afterForm = (status) => {
  let messageStroke;

  if (status === 200) {
    console.log('Произошла отправка');

    messageStroke = `
    <div class="form-message form-message--success">
    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
      <p>Your application has been submitted. We will contact you soon</p>
    </div>
    `;
  } else {
    messageStroke = `
    <div class="form-message form-message--error">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>
      <p>Something went wrong. Try again.</p>
    </div>
     `;
  }

  document.body.insertAdjacentHTML('beforeend', messageStroke);
  const message = document.querySelector('.form-message');

  setTimeout(() => {
    message.classList.add('active');
  }, 500);

  setTimeout(() => {
    message.classList.remove('active');
  }, 3500);

  setTimeout(() => {
    message.remove();
  }, 4000);
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.subscribe')) {
    validateForms('.subscribe', rules('.subscribe'), afterForm);
  }
});
