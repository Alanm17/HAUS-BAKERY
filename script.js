// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  content.classList.add("fade-in");

  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.href;

      content.classList.remove("fade-in");
      content.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 5000); // Match this duration with the CSS transition duration for fade-out
    });
  });
});
