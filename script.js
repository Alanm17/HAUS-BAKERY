// script.js
document.addEventListener("DOMContentLoaded", function () {
  const scrollableRow = document.querySelector(".scroll_box");
  let scrollInterval;
  let isUserScrolling = false;
  const autoScrollSpeed = 1000; // Speed of auto-scroll in pixels per interval
  const scrollIntervalTime = 20; // Time interval for auto-scroll

  // Function to start auto-scroll

  // Function to stop auto-scroll
  function stopAutoScroll() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
  }

  // Event listener to detect user scroll and pause auto-scroll
  scrollableRow.addEventListener("scroll", function () {
    if (!isUserScrolling) {
      isUserScrolling = true;
      stopAutoScroll();
      setTimeout(() => {
        isUserScrolling = false;
        startAutoScroll();
      }, 3000); // 3 seconds delay before restarting auto-scroll
    }
  });
});
// Initial call to start auto-scrolling
