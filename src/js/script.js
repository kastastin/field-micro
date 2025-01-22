"use strict";

// <-- What Harper Hotspots -->
document.addEventListener("DOMContentLoaded", () => {
  const hotspots = document.querySelectorAll(".what-harper__hotspot");

  let activeHotspot = hotspots[0];
  activeHotspot.classList.add("active");

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
      if (activeHotspot !== hotspot) {
        activeHotspot.classList.remove("active");
      }

      hotspot.classList.toggle("active");
      activeHotspot = hotspot.classList.contains("active") ? hotspot : hotspots[0];
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".what-harper__hotspot")) {
      hotspots.forEach((hotspot) => hotspot.classList.remove("active"));
      hotspots[0].classList.add("active"); // Keep first open
      activeHotspot = hotspots[0];
    }
  });
});

// <-- Swiper -->
const swiper = new Swiper(".feedback__swiper", {
  loop: false,
  spaceBetween: 30,
  effect: "cards",

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2);
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// <-- Menu Burger -->
const burger = document.querySelector(".burger-btn");
const header = document.querySelector(".heaader--main");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
});
