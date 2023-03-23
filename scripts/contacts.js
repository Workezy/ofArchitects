(function () {
  let modal = document.querySelector(".modal");
  let closeButton = document.querySelector(".modalClose");
  let modalTriggers = document.querySelectorAll("[data-trigger]");

  let isModalOpen = false;
  let pageYOffset = 0;

  let openModal = function () {
    pageYOffset = window.pageYOffset;
    modal.classList.add("is-open");
    isModalOpen = true;
  };

  let closeModal = function () {
    modal.classList.remove("is-open");
    isModalOpen = false;
  };

  let onScroll = function (e) {
    if (isModalOpen) {
      e.preventDefault();
      window.scrollTo(0, pageYOffset);
    }
  };

  modalTriggers.forEach(function (item) {
    item.addEventListener("click", openModal);
  });

  document.addEventListener("scroll", onScroll);

  closeButton.addEventListener("click", closeModal);
})();
