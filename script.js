
const hiddenTop = document.querySelectorAll('.hidden-top');
const hidden = document.querySelectorAll('.hidden');

function handleIntersection(entries, observer) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  });
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const observer = new IntersectionObserver(handleIntersection, options);
hiddenTop.forEach(target => {
  observer.observe(target)
})

hidden.forEach(target => {
  observer.observe(target)
})


const buttonsWrapper = document.querySelector(".swiper-map");
const slides = document.querySelector(".swiper-wrapper-inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')) {
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});