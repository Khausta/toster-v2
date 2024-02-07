
function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        // var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
        //   'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        // var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          var t = getTimeRemaining(endtime);
      
        //   daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
      
      var deadline="January 01 2024 00:00:00 GMT+0300"; 
      var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
      // initializeClock('countdown', deadline);




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
// for (let i = 0; i < customBullets.length; i++) {
//   customBullets[i].classList.add(`swiper-pagination__img_${i + 1}`);
// }

const stockCounter = document.querySelector('.good__number');
const stockIndicator = document.querySelector('.good__stock-left');

stockCounter.addEventListener('change', () => {
  console.log(stockCounter.value);
  stockIndicator.style.width = stockCounter.value + '%';
})


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


//drop down
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






class Menu {
        constructor (menuBlock) {
                this.parentBlock = document.querySelector(`.${menuBlock}`);
                this.selectBtn = this.parentBlock.querySelector('.select-btn');
                this.options = this.parentBlock.querySelectorAll(".option");
                this.sBtnText = this.parentBlock.querySelector(".sBtn-text");
        }

        init() {
                this.clickBtn();
                this.clickOption();
        }

        clickBtn() {
                this.selectBtn.addEventListener("click", () =>
                this.parentBlock.classList.toggle("active")
              );    
        }

        clickOption() {
                this.options.forEach((option) => {
                        option.addEventListener("click", () => {
                          let selectedOption = option.querySelector(".option-text").innerText;
                          this.sBtnText.innerText = selectedOption;
                      
                          this.parentBlock.classList.remove("active");
                        });
                      });
        }
}

// const sizeMenu = new Menu('good__size-menu');
// sizeMenu.init();

// const colorMenu = new Menu('good__color-menu');
// colorMenu.init();


                              

