
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute('data-target');
          const duration = 2000; 
          
          let start = 0;
          const step = target / (duration / 16);

          const updateCounter = () => {
              start += step;
              if (start < target) {
                  counter.innerText = Math.ceil(start);
                  requestAnimationFrame(updateCounter);
              } else {
                  counter.innerText = target;
              }
          };
          
          updateCounter();
          observer.unobserve(counter); 
      }
  });
}, { threshold: 0.5 }); 


document.querySelectorAll('.counter').forEach((counter) => {
  observer.observe(counter);
});

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
}