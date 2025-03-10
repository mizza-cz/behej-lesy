document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    // Переключение табов через Bootstrap
    const tabTrigger = new bootstrap.Tab(this);
    tabTrigger.show();

    // Скролл до начала секции evaluationSection
    const evaluationSection = document.querySelector("#evaluationSection");
    const offset = 20;

    if (evaluationSection) {
      const elementPosition = evaluationSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      evaluationSection.scrollTop = 0;
    }
  });
});
