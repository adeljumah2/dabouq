document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const header = document.getElementById('header');
  const preloader = document.getElementById('preloader');
  const scrollProgress = document.getElementById('scroll-progress');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  html.classList.add('loading');

  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('done');
      html.classList.remove('loading');
    }, 1400);
  } else {
    html.classList.remove('loading');
  }

  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
    });
  }

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  function openMenu() {
    mobileMenu?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuToggle?.addEventListener('click', openMenu);
  mobileClose?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  function animateCounter(counter, delay = 0) {
    const target = +counter.dataset.target;
    const duration = +counter.dataset.duration || (target > 20 ? 2400 : 1600);

    setTimeout(() => {
      counter.closest('.stat-item')?.classList.add('counting');
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        counter.textContent = Math.round(eased * target);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          counter.textContent = target;
          counter.closest('.stat-item')?.classList.remove('counting');
          counter.closest('.stat-item')?.classList.add('counted');
        }
      };

      requestAnimationFrame(tick);
    }, delay);
  }

  const statsBand = document.querySelector('.stats-band');
  const aboutSection = document.querySelector('.about-section');

  function setupCounters(container, stagger = 180) {
    if (!container) return;
    const counters = container.querySelectorAll('.counter');
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      counters.forEach((counter, i) => animateCounter(counter, i * stagger));
      observer.unobserve(container);
    }, { threshold: 0.35 });

    const startObserving = () => observer.observe(container);
    if (preloader) setTimeout(startObserving, 1500);
    else startObserving();
  }

  setupCounters(statsBand);
  setupCounters(aboutSection, 0);

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  document.querySelectorAll('.eco-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  const fileInput = document.getElementById('cv-upload');
  if (fileInput) {
    const uploadContent = document.getElementById('upload-content');
    const uploadSuccess = document.getElementById('upload-success');
    const fileNameDisplay = document.getElementById('file-name');

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        uploadContent?.classList.add('hide');
        uploadSuccess?.classList.add('show');
        if (fileNameDisplay) fileNameDisplay.textContent = e.target.files[0].name;
      }
    });
  }
});
