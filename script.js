document.addEventListener("DOMContentLoaded", function () {
  const scrollableRow = document.querySelector(".scroll_box");
  let scrollInterval;
  let isUserScrolling = false;
  let autoScrollSpeed = 50; // Pixels to scroll per tick

  // Function to start the auto-scroll
  function startAutoScroll() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
    scrollInterval = setInterval(() => {
      scrollableRow.scrollLeft += autoScrollSpeed;
    }, 200); // Adjust the interval as needed
  }

  // Function to stop the auto-scroll
  function stopAutoScroll() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
  }

  // Event listener to detect user scroll
  scrollableRow.addEventListener("scroll", function () {
    isUserScrolling = true;
    stopAutoScroll();
    setTimeout(() => {
      isUserScrolling = false;
      startAutoScroll();
    }, 1000); // 3 seconds delay before restarting auto-scroll
  });

  // Initial call to start auto-scrolling
  startAutoScroll();
});
