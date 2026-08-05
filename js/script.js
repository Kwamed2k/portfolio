
  // theme init + toggle
  (function(){
    const root = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    let saved = null;
    try{ saved = localStorage.getItem('dk-theme'); }catch(e){}
    const initial = saved || 'dark';
    root.setAttribute('data-theme', initial);
    themeBtn.textContent = initial === 'dark' ? '🌙' : '☀️';

    themeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      themeBtn.textContent = next === 'dark' ? '🌙' : '☀️';
      try{ localStorage.setItem('dk-theme', next); }catch(e){}
    });
  })();

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  revealEls.forEach(el => io.observe(el));
