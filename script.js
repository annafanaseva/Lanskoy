// observer

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

// document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
// document.querySelectorAll(".hidden-top").forEach((el) => observer.observe(el));

// slider

let slider = new Glide('.slider', {
  type: 'slider',
  autoplay: 4000,
  focusAt: 'center',
  perView: 2
});


slider.mount();