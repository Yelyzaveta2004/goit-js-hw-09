document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.feedback-form');
    const feedbackFormStateKey = 'feedback-form-state';
  
    function saveFormDataToLocalStorage() {
      const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
      };
  
      localStorage.setItem(feedbackFormStateKey, JSON.stringify(formData));
    }
  
    function loadFormDataFromLocalStorage() {
      const storedFormData = localStorage.getItem(feedbackFormStateKey);
  
      if (storedFormData) {
        const formData = JSON.parse(storedFormData);
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
      }
    }
  
    loadFormDataFromLocalStorage();
  
    form.addEventListener('input', function () {
      saveFormDataToLocalStorage();
    });
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const emailValue = form.elements.email.value.trim();
      const messageValue = form.elements.message.value.trim();
  
      if (emailValue && messageValue) {
        console.log({ email: emailValue, message: messageValue });
  
        localStorage.removeItem(feedbackFormStateKey);
        form.reset();
      } else {
        alert('Please fill in both email and message fields.');
      }
    });
  });
  