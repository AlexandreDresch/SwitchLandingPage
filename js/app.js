document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      swiper.slidePrev();
    } else if (event.key === "ArrowRight") {
      swiper.slideNext();
    }
  });

  const gameInput = document.getElementById("gameInput");

  gameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let searchGame = gameInput.value.trim().toUpperCase();

      switch (searchGame) {
        case "MARIO":
          swiper.slideTo(0);
          break;
        case "POKEMON":
          swiper.slideTo(1);
          break;
          case "ZELDA":
            swiper.slideTo(2);
            break;
        default:
          alert("Jogo não foi encontrado");
          break;
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburger-menu");
  const menu = document.querySelector(".hamburger-menu-open");

  menu.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });

  hamburgerButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll("#details-button");
  const modals = document.querySelectorAll(".details-modal");

  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = button.getAttribute("data-modal");
      const targetModal = document.querySelector(
        `.details-modal[data-modal="${modalId}"]`
      );
      if (targetModal) {
        targetModal.classList.toggle("hidden");
      }
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
  });
});
