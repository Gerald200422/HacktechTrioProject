document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".games-carousel");
  let cards = Array.from(document.querySelectorAll(".game-card"));
  let currentIndex = 0;
  let intervalId;

  function updateCarousel() {
    carousel.innerHTML = "";

    const total = cards.length;
    const orderedCards = [
      cards[(currentIndex) % total],
      cards[(currentIndex + 1) % total],
      cards[(currentIndex + 2) % total]
    ];

    orderedCards.forEach((card, index) => {
      card.classList.remove("center", "side");

      if (index === 1) {
        card.classList.add("center");
      } else {
        card.classList.add("side");
      }

      carousel.appendChild(card);

      
      card.addEventListener("mouseenter", stopCarousel);
      card.addEventListener("mouseleave", startCarousel);
      card.addEventListener("touchstart", stopCarousel);
      card.addEventListener("touchend", startCarousel);
    });
  }

  function startCarousel() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    }, 3000);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

 
  updateCarousel();
  startCarousel();
});
