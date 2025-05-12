const cards = document.querySelectorAll('.teacher-card');
  let currentIndex = 1; 
  let intervalId;
  let isPaused = false;

  function setSpotlight(index) {
    cards.forEach((card, i) => {
      card.classList.remove('spotlight');
      card.style.transform = 'translateX(0)';
      if (i === index) {
        card.classList.add('spotlight');
      }
    });
  }

  function animateEntry() {
    cards[0].style.transform = 'translateX(-300px)';
    cards[2].style.transform = 'translateX(300px)';
    setTimeout(() => {
      cards[0].style.transform = 'translateX(0)';
      cards[2].style.transform = 'translateX(0)';
      cards[1].classList.add('spotlight');
      startLoop();
    }, 600);
  }

  function startLoop() {
    intervalId = setInterval(() => {
      if (isPaused) return;

      currentIndex = (currentIndex + 1) % cards.length;
      setSpotlight(currentIndex);
    }, 3000);
  }

  function stopLoop() {
    isPaused = true;
    clearInterval(intervalId);
  }

  cards.forEach((card) => {
    card.addEventListener('mouseenter', stopLoop);
    card.addEventListener('touchstart', stopLoop, { passive: true });
  });

  window.addEventListener('DOMContentLoaded', () => {
    animateEntry();
  });