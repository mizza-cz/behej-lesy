document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    const tabTrigger = new bootstrap.Tab(this);
    tabTrigger.show();

    scrollToEvaluationSection();
  });
});

const activeTab = document.querySelector(".nav-link.active");
if (activeTab) {
  activeTab.addEventListener("click", () => {
    scrollToEvaluationSection();
  });
}

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
