// header-swiper
const swiper1 = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 2000,
  },
});


// simplebar
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 28,
});
})


// dropdown
const btns = document.querySelectorAll(".header__bottom-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const icons = document.querySelectorAll(".btn-icon")
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";
const activeIcon = "icon__active"

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    let iconsOpen = this.parentElement.querySelector(".btn-icon");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    icons.forEach(el => {
      if (el != iconsOpen) {
        el.classList.remove(activeIcon)
      }
    })
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
    iconsOpen.classList.toggle(activeIcon)
  })
})


// burger
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('nav--visible');
  });
});


// find-btn
const findOpen = document.querySelector('.find-btn-1024__open')
const findForm = document.querySelector('.find-form')
const findClose = document.querySelector('.find-form__close')

findOpen.addEventListener('click', function() {
  findForm.classList.toggle('find-form--active')
  findOpen.classList.toggle('find-btn-1024__open--active')
})

findClose.addEventListener('click', function() {
  findForm.classList.remove('find-form--active')
  findOpen.classList.remove('find-btn-1024__open--active')
})


// select
const element = document.querySelector('.gallery__select')
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});


// gallery-swiper
const swiper2 = new Swiper(".gallery__swiper", {
  breakpoints: {
    1780: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    586: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    }
  },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev",
  },
  pagination: {
    el: ".pagination",
    type: "fraction",
  },
});


// artist
document.querySelectorAll('.source').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click' || 'keydown', function (e) {
    const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.source').forEach(function (btn) {
        btn.classList.remove('source--active')
      });
      e.currentTarget.classList.add('source--active');

      document.querySelectorAll('.target').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('target--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('target--active');
  })
})

// accordion
document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
  });
  acc.open(0)
})


// events-swiper
const swiper3 = new Swiper(".events__swiper", {
  breakpoints: {
    1780: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 2,
    },
    586: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
  },
  hashNavigation: {
    watchState: true,
  },
  navigation: {
    nextEl: ".events-button-next",
    prevEl: ".events-button-prev",
  },
  pagination: {
    el: ".events-pagination",
    clickable: true,
  },
});


// projects-swiper
const swiper4 = new Swiper(".projects__swiper", {
  breakpoints: {
    1780: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    586: {
      slidesPerView: 2,
      spaceBetween: 34,
    }
  },
  loop: true,
  navigation: {
    nextEl: ".projects-button-next",
    prevEl: ".projects-button-prev",
  },
});


// tooltips
tippy('#tooltip1', {
  theme: 'own',
  content: 'Пример современных тенденций - современная методология разработки',
});

tippy('#tooltip2', {
  theme: 'own',
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
});

tippy('#tooltip3', {
  theme: 'own',
  content: 'В стремлении повысить качество',
});


// form
const regexp = /^[a-zA-Zа-яА-Я]+$/;
const form = document.querySelector(".contacts__form");
const nameInput = document.querySelector(".name")
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate(".contacts__form");

validation
  .addField('.name', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели имя!'
    },
    {
      rule: 'customRegexp',
      value: /^[a-zA-Zа-яА-Я]+$/,
      errorMessage: 'Недопустимый формат',
    }
  ])
  .addField('.tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели телефон!',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Недопустимый формат',
    },
  ]).onSuccess((event) => {
    // console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
});


// map
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'maps-icon.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('zoomControl');
}


// modal
const slide = document.querySelectorAll('.slide');
const modalOverlay = document.querySelector('.modal-overlay ');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close')

slide.forEach(function(e) {
  e.addEventListener("click" || "keydown", (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    modal.classList.remove('modal--visible');
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
})

modalOverlay.addEventListener("click", (e) => {
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modal.classList.remove('modal--visible');
	}
});

modalCloseBtn.addEventListener("click", function() {
  modalOverlay.classList.remove('modal-overlay--visible');
  modal.classList.remove('modal--visible');
})
