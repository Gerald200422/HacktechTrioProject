document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".teacher-card"));
  let currentIndex = 0;
  let intervalId;

  function updateClasses() {
    cards.forEach((card, i) => {
      card.classList.remove("left", "center", "right");
    });

    const total = cards.length;
    const left = cards[(currentIndex + total - 1) % total];
    const center = cards[currentIndex % total];
    const right = cards[(currentIndex + 1) % total];

    left.classList.add("left");
    center.classList.add("center");
    right.classList.add("right");
  }

  function startCarousel() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateClasses();
    }, 3000);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }


  cards.forEach(card => {
    card.addEventListener("mouseenter", stopCarousel);
    card.addEventListener("mouseleave", startCarousel);
  });

  updateClasses();
  startCarousel();
});
