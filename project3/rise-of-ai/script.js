document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  const modal1 = document.getElementById("modal1");
  const modal2 = document.getElementById("modal2");
  const overlay = document.getElementById("overlay");
  const sections = document.querySelectorAll("section");

  modal1.style.display = "none";
  modal2.style.display = "none";
  overlay.style.display = "none";

  // Open modal on button click
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      const modal = document.querySelector(target);
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal.style.display = "block";
      overlay.style.display = "block";

      // Update active class on click
      updateActiveButton(this);
    });
  });

  const closeButtons = document.querySelectorAll(".modal-button");
  closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
      modal1.style.display = "none";
      modal2.style.display = "none";
      overlay.style.display = "none";
    });
  });

  let modal = document.getElementById("modal");
  let btn = document.getElementById("openModal");
  let span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function revealSectionContainer(section) {
    let container = section.querySelector(".container");
    if (container) {
      container.classList.add("reveal");
    }
  }

  function unrevealSectionContainer(section) {
    let container = section.querySelector(".container");
    if (container) {
      container.classList.remove("reveal");
    }
  }

  function updateActiveButton(activeButton) {
    buttons.forEach((button) => button.classList.remove("active"));
    activeButton.classList.add("active");
  }

  function revealSections() {
    sections.forEach(function (section) {
      var sectionTop = section.getBoundingClientRect().top;
      var sectionBottom = section.getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
        revealSectionContainer(section);

        // Update active button based on visible section
        const sectionId = section.getAttribute("id");
        buttons.forEach((button) => {
          if (button.getAttribute("data-target") === `#${sectionId}`) {
            updateActiveButton(button);
          }
        });
      } else {
        unrevealSectionContainer(section);
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();
});
