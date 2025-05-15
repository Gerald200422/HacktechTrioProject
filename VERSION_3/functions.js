document.addEventListener("DOMContentLoaded", function () {
  const row = document.getElementById("subjectsRow");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const gap = 16;
  let currentIndex = 0;
  let cardWidth = 0;
  let cardsToShow = 1;

  function updateLayout() {
    const container = document.querySelector(".subjects-grid");
    const containerWidth = container.offsetWidth;

   
    if (containerWidth < 600) {
      cardsToShow = 1;
    } else if (containerWidth < 900) {
      cardsToShow = 2;
    } else {
      cardsToShow = 3;
    }

 
    const totalGap = gap * (cardsToShow - 1);
    cardWidth = ((containerWidth - totalGap) / cardsToShow) * 0.6;


    Array.from(row.children).forEach((card) => {
      card.style.width = `${cardWidth}px`;
      card.style.flex = `0 0 ${cardWidth}px`; 
    });

  
    const maxIndex = Math.max(0, row.children.length - cardsToShow);
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    updateCarousel();
  }

  function updateCarousel() {
    const offset = (cardWidth + gap) * currentIndex;
    row.style.transform = `translateX(-${offset}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const maxIndex = row.children.length - cardsToShow;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateLayout);
  updateLayout(); 
});
