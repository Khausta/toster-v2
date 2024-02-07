
document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date('02-08-2024');
  let timerId = null;
  function countdownTimer() {
    const diff = deadline - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    }
    
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
 
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});


const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 2000,
        autoplay: true,
        spaceBetween: 10,
        pagination: {
                el: '.swiper-pagination',
                clickable: true,
                autoplayDisableOnInteraction: true,
        },

      });
   
const customBullets = document.querySelectorAll('.swiper-pagination-bullet');
const stockCounter = document.querySelector('.good__number');
const stockIndicator = document.querySelector('.good__stock-left');

stockCounter.addEventListener('change', () => {
  console.log(stockCounter.value);
  stockIndicator.style.width = stockCounter.textContent + '%';
})

document.querySelectorAll('.accordeon-item-js__trigger').forEach((item) => {
  item.addEventListener('click', () => {
      let content = item.nextElementSibling;
      let arrow = item.querySelector('.accordeon-item-js__arrow');

      if(content.style.maxHeight) {
          document.querySelectorAll('.accordeon-item-js__content').forEach ( el => el.style.maxHeight = null);
          arrow.classList.remove('__active');
          
      } else {
          document.querySelectorAll('.accordeon-item-js__content').forEach ( el => el.style.maxHeight = null);    
          content.style.maxHeight = content.scrollHeight + 'px';  
          content.style.visibility = 'visible';
          content.style.opacity = '1';
          arrow.classList.add('__active');
      }

  })
})


const hiddenText = document.querySelector('.footer__text_hidden');
const buttonReadMore = document.querySelector('.button-read-more');

buttonReadMore.addEventListener('click', () => {
  console.log(hiddenText.style.maxHeight);
  if (hiddenText.style.maxHeight) {
    hiddenText.style.maxHeight = null;
    hiddenText.classList.remove('visible');
    buttonReadMore.classList.add('button__accent');
    buttonReadMore.textContent = 'Read more';

  } else {
    hiddenText.style.maxHeight = null;
    hiddenText.style.maxHeight = hiddenText.scrollHeight + 'px'; 
    hiddenText.classList.add('visible');
    buttonReadMore.textContent = 'Read less';
    buttonReadMore.classList.remove('button__accent');
  }
})

const openHandler = (element) => element.classList.add('_active');
const closeHandler = (element) => element.classList.remove('_active');

const menuButton = document.querySelector('.header-block__subheader');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => openHandler(menu));

const closeMenu = document.querySelector('.menu__header');
const menuItems = document.querySelectorAll('.menu__item');

closeMenu.addEventListener('click', () => closeHandler(menu));

menuItems.forEach(item => {
  item.addEventListener('click', () => closeHandler(menu))
});


const popup = document.querySelector('.overlay');
const buy = document.querySelector('.buy__button-click');
const closePopup = document.querySelector('.popup__close');
const popupBtn = document.querySelector('.popup__button-click');


buy.addEventListener('click', () => openHandler(popup));
closePopup.addEventListener('click', () => closeHandler(popup));
popupBtn.addEventListener('click', () => closeHandler(popup));

                              

