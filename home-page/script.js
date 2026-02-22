// const menuToggle = document.getElementById("menuToggle");
// const sideNav = document.getElementById("sideNav");
// const navOverlay = document.getElementById("navOverlay");

// alert("home.js running");


// // Helper to toggle Menu State
// const toggleMenu = (isOpen) => {
//   menuToggle.classList.toggle("open", isOpen);
//   sideNav.classList.toggle("show", isOpen);
//   navOverlay.classList.toggle("show", isOpen);
//   document.body.style.overflow = isOpen ? "hidden" : ""; // Prevent background scroll
// };

// menuToggle.addEventListener("click", () => {
//   const isOpening = !sideNav.classList.contains("show");
//   toggleMenu(isOpening);
// });

// navOverlay.addEventListener("click", () => toggleMenu(false));

// // Close menu when a link is clicked
// sideNav.querySelectorAll("a").forEach((link) => {
//   link.addEventListener("click", () => toggleMenu(false));
// });

// // FAQ Logic
// function toggleFaq(element) {
//   const allFaqItems = document.querySelectorAll(".faq-item");
//   allFaqItems.forEach((item) => {
//     if (item !== element) item.classList.remove("active");
//   });
//   element.classList.toggle("active");
// }

// // Handle Keyboard (Enter/Space) for FAQs
// document.querySelectorAll(".faq-item").forEach((item) => {
//   item.addEventListener("keydown", (e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       toggleFaq(item);
//     }
//   });
// });


console.log("home.js loaded");

if (typeof loadPageContent === "function") {
  console.log("Calling loadPageContent()");
  loadPageContent();
} else {
  console.error("loadPageContent is NOT available");
}


