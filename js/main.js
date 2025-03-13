// Modal

const myModal = document.querySelector('#contactFormModal');
const myInput = document.querySelector('#floatingName');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});


// Form

const formElement = document.querySelector('#contactForm');

formElement.addEventListener('submit', async (e) => {
  e.preventDefault();

  const token = '7866098146:AAEDIp8LSOq7wAtDixR8-nMh48j_TOTzIfU'; 
  const chatId = '463699299'; 
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const nameValue = formElement.querySelector('#name').value;
  const emailValue = formElement.querySelector('#email').value;
  const phoneValue = formElement.querySelector('#tel').value;
  const resultElement = formElement.querySelector('#result');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `🔔 Нова заявка з форми сайта:\n\n👤 Користувач: ${nameValue}\n📧 Email: ${emailValue}\n💬 Телефон: ${phoneValue}`,
        parse_mode: 'HTML'
      })
    });

    if (response.ok) {
      resultElement.textContent = '✅ Форма відправлена!';
      formElement.reset();
    } else {
      resultElement.textContent = '❌ Помилка при відправці!';
      formElement.reset();
    }
  } catch (error) {
    resultElement.textContent = '❌ Помилка при відправці!';
    formElement.reset();
    console.error('Помилка:', error);
  }

});