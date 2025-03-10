// document.querySelectorAll(".nav-link").forEach((link) => {
//   link.addEventListener("click", function () {
//     // Переключение табов через Bootstrap
//     const tabTrigger = new bootstrap.Tab(this);
//     tabTrigger.show();

//     // Скролл до начала секции evaluationSection
//     const evaluationSection = document.querySelector("#evaluationSection");
//     const offset = 20;

//     if (evaluationSection) {
//       const elementPosition = evaluationSection.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });

//       evaluationSection.scrollTop = 0;
//     }
//   });
// });

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    // Переключение табов через Bootstrap с ожиданием завершения
    const tabTrigger = new bootstrap.Tab(this);
    tabTrigger.show();

    // Добавляем обработчик события "shown.bs.tab"
    this.addEventListener(
      "shown.bs.tab",
      () => {
        const evaluationSection = document.querySelector("#evaluationSection");
        const offset = 20;

        if (evaluationSection) {
          const elementPosition = evaluationSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Сбрасываем прокрутку самой секции
          evaluationSection.scrollTop = 0;
        }
      },
      { once: true }
    ); // { once: true } гарантирует, что обработчик выполнится только один раз
  });
});
