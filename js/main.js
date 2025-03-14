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

  const token = '322';
  const chatId = '234234';
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

// Loader 

document.addEventListener("DOMContentLoaded", (event) => {
  const loader = document.querySelector('.loader');

  setTimeout(() => {
    loader.classList.add('d-none');
    initAOS();
  }, 1000);

  function initAOS() {
    // AOS
    if (window.AOS) {
      AOS.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 100, // values from 0 to 3000, with step 50ms
        duration: 750, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

      });
    }
  }
});