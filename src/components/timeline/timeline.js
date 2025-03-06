(function () {
  const fetchHTMLButtons = document.querySelectorAll(".js-fetchHTML");
  let fetchCounter = 0;

  const fetchData = (ev) => {
    ev.preventDefault();

    // Используем ev.currentTarget, чтобы получить саму кнопку, даже если клик по внутреннему элементу
    const fetchButton = ev.currentTarget;

    // Читаем data-* атрибуты с кнопки
    let { fetchUrl, fetchContainer, fetchLimit, textFetching, textError } =
      fetchButton.dataset;

    fetchLimit = parseInt(fetchLimit, 10); // Преобразуем fetchLimit в число

    const url = new URL(window.location.href);

    if (url.searchParams.has("page")) {
      fetchCounter = parseInt(url.searchParams.get("page"), 10);
    }

    fetchCounter++;

    url.searchParams.set("page", fetchCounter);
    window.history.pushState({}, "", url);
    const urlParams = window.location.search;

    fetchUrl = fetchUrl + urlParams;

    fetchButton.querySelector(".fw-medium").innerText = textFetching;
    fetchButton.disabled = true;
    fetchButton.style.pointerEvents = "none";

    const container = document.querySelector(fetchContainer);

    const checkError = (response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.text();
      } else {
        throw Error(response.status);
      }
    };

    const handleError = (error) => {
      console.warn("Fetch failed:", error.message);
      container &&
        container.insertAdjacentHTML(
          "afterend",
          `<p class="u-ta-center u-fs-big u-fw-bold u-c-red u-my-24">${textError}</p>`
        );
      fetchButton.disabled = false;
      fetchButton.style.pointerEvents = "all";
      fetchButton.querySelector(".fw-medium").innerText = "Načíst další";
    };

    const handleData = (HTML) => {
      const frag = document.createRange().createContextualFragment(HTML);
      container && container.appendChild(frag);

      if (fetchCounter >= fetchLimit) {
        fetchButton.classList.add("d-none"); // Скрываем кнопку
      } else {
        fetchButton.disabled = false;
        fetchButton.style.pointerEvents = "all";
        fetchButton.querySelector(".fw-medium").innerText = "Načíst další";
      }
    };

    fetch(fetchUrl).then(checkError).then(handleData).catch(handleError);
  };

  if (fetchHTMLButtons.length) {
    fetchHTMLButtons.forEach((fetchBtn) => {
      fetchBtn.addEventListener("click", fetchData);
    });
  }
})();
