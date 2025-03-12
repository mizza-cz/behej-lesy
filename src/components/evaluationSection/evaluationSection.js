// document.querySelectorAll(".nav-link").forEach((link) => {
//   link.addEventListener("click", function () {
//     const tabTrigger = new bootstrap.Tab(this);
//     tabTrigger.show();

//     this.addEventListener(
//       "shown.bs.tab",
//       () => {
//         const evaluationSection = document.querySelector("#evaluationSection");
//         const offset = 20;

//         if (evaluationSection) {
//           const elementPosition = evaluationSection.getBoundingClientRect().top;
//           const offsetPosition = elementPosition + window.pageYOffset - offset;

//           window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth",
//           });

//           evaluationSection.scrollTop = 0;
//         }
//       },
//       { once: true }
//     );
//   });
// });
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    const tabTrigger = new bootstrap.Tab(this);
    tabTrigger.show();

    scrollToEvaluationSection(); // Прокрутка вниз при клике
  });
});

// Делаем активную вкладку тоже кликабельной
const activeTab = document.querySelector(".nav-link.active");
if (activeTab) {
  activeTab.addEventListener("click", () => {
    scrollToEvaluationSection();
  });
}

// Функция прокрутки
function scrollToEvaluationSection() {
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
}
