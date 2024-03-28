let currentIndex = 0;
    const totalSlides = 5;
    const slideCounter = document.getElementById('slide-counter');

    const showSlide = (index) => {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      const translateValue = -currentIndex * 100 + "%";
      document.querySelector(".carousel").style.transform = `translateX(${translateValue})`;
      updateSlideCounter();
    };

    const nextSlide = () => {
      showSlide(currentIndex + 1);
    };

    const prevSlide = () => {
      showSlide(currentIndex - 1);
    };

    const updateSlideCounter = () => {
      slideCounter.textContent = `${currentIndex + 1} / ${totalSlides}`;
    };

    const closeCarousel = () => {
      document.querySelector(".carousel-container").style.display = "none";
    };

    // Inicialização
    showSlide(currentIndex);