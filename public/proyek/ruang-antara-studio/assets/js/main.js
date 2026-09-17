/**
 * Ruang Antara Studio — Interaksi Arsitektural
 * Vanilla JavaScript Murni — Tanpa dependensi eksternal
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initHeroSlider();
  initPortfolioFilter();
  initScrollReveals();
  initContactForm();
  markCurrentNav();
});

/**
 * 1. Navigasi Sticky dengan Perubahan Proporsi saat Scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 50) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Menu Drawer Minimalis untuk Tampilan Mobile
 */
function initMobileNav() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const overlay = document.querySelector('.mobile-nav-overlay');
  if (!menuBtn || !overlay) return;

  const toggleNav = (forceState) => {
    const isOpen = typeof forceState === 'boolean' ? forceState : !overlay.classList.contains('open');
    menuBtn.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  menuBtn.addEventListener('click', () => toggleNav());

  // Tutup jika tautan diklik
  const overlayLinks = overlay.querySelectorAll('a');
  overlayLinks.forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
  });

  // Tutup dengan tombol Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      toggleNav(false);
    }
  });
}

/**
 * 3. Slideshow Hero Lambat & Tenang (Transisi 7,5 detik)
 */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const projectTitle = document.querySelector('.hero-project-title');
  if (slides.length <= 1) return;

  let currentIndex = 0;
  let timer = null;
  const slideInterval = 7500; // 7,5 detik per foto

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      if (dots[i]) dots[i].classList.toggle('active', i === index);
    });

    if (projectTitle && slides[index]) {
      const title = slides[index].getAttribute('data-project') || '';
      projectTitle.textContent = title;
    }
    currentIndex = index;
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  };

  const startAutoCycle = () => {
    stopAutoCycle();
    timer = setInterval(nextSlide, slideInterval);
  };

  const stopAutoCycle = () => {
    if (timer) clearInterval(timer);
  };

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoCycle();
    });
  });

  startAutoCycle();
}

/**
 * 4. Filter Kategori Portofolio Berbasis Teks Understated
 */
function initPortfolioFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.portfolio-card');
  if (!filterTabs.length || !cards.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-filter');

      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 300);
        }
      });
    });
  });
}

/**
 * 5. Scroll Reveal Halus (IntersectionObserver)
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-fade');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

/**
 * 6. Formulir Kontak Bersahaja (Maksimal 4 Kolom)
 */
function initContactForm() {
  const form = document.getElementById('studioInquiryForm');
  const alertBox = document.getElementById('formAlertBox');
  if (!form || !alertBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="client_name"]').value.trim();
    const email = form.querySelector('[name="client_email"]').value.trim();
    const type = form.querySelector('[name="project_type"]').value;
    const message = form.querySelector('[name="project_message"]').value.trim();

    if (!name || !email || !message) {
      alertBox.textContent = 'Mohon lengkapi seluruh kolom isian yang bertanda bintang.';
      alertBox.classList.add('visible');
      alertBox.style.borderLeftColor = '#C25438';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Mengirimkan pesan...';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      alertBox.innerHTML = `<strong>Pesan Anda telah kami terima.</strong> Dipta Wirawan akan meninjau parameter tapak Anda dan membalas melalui surel <em>${email}</em> dalam waktu dua hari kerja.`;
      alertBox.style.borderLeftColor = '#A64B2A';
      alertBox.classList.add('visible');
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });
}

/**
 * 7. Penanda Menu Aktif
 */
function markCurrentNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
