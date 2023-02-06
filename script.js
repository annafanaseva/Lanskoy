// First we select the element we want to target
const hiddenTop = document.querySelectorAll('.hidden-top');
const hidden = document.querySelectorAll('.hidden');

// Next we want to create a function that will be called when that element is intersected
function handleIntersection(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
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

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
const observer = new IntersectionObserver(handleIntersection, options);

// Finally start observing the target element
hiddenTop.forEach(target => {
  observer.observe(target)
})

hidden.forEach(target => {
  observer.observe(target)
})