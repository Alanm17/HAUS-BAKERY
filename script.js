//
document.addEventListener("DOMContentLoaded", function () {
  const scrollableRow = document.querySelector(".scroll_box");
  let scrollInterval;
  let isUserScrolling = false;
  let autoScrollSpeed = 1000; // Pixels to scroll per tick (set to 1 for smooth effect)
  const autoScrollInterval = 10; // Interval in ms for smooth scrolling

  // Function to start the auto-scroll
  function startAutoScroll() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
    scrollInterval = setInterval(() => {
      scrollableRow.scrollLeft += autoScrollSpeed;
    }, autoScrollInterval);
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
    }, 3000); // 3 seconds delay before restarting auto-scroll
  });

  // Initial call to start auto-scrolling
  startAutoScroll();

  // Adding event listeners to the left scroll button(s)
  const leftButtons = document.getElementsByClassName("scroll_left");
  for (let btn of leftButtons) {
    btn.addEventListener("click", function () {
      scrollableRow.scrollBy({
        left: -200, // Adjust this value for the desired scroll amount
        behavior: "smooth",
      });
    });
  }

  // Adding event listeners to the right scroll button(s)
  const rightButtons = document.querySelector(".scroll_right");
  for (let btn of rightButtons) {
    btn.addEventListener("click", function () {
      scrollableRow.scrollBy({
        left: 200, // Adjust this value for the desired scroll amount
        behavior: "smooth",
      });
    });
  }
});

// document.addEventListener('DOMContentLoaded',function{
//   const backVid = document.querySelector("video");
//   if(backVid){
//     video.currentTime = video.duration || 0;
//     video.pause();
//   }else{
//     video.play()
//     // video.addEventListener('ended',function{

//     // })
//   }
// })

  /* <script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
</script> */
}
