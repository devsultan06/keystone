function startCountdown(duration) {
  const countdown = document.getElementById("countdown");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    let now = new Date().getTime();
    let endTime = now + duration;

    let interval = setInterval(() => {
      let currentTime = new Date().getTime();
      let timeLeft = endTime - currentTime;

      if (timeLeft <= 0) {
        clearInterval(interval);
        countdown.innerHTML = "Offer Expired";
        return;
      }

      let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      daysEl.innerHTML = `${days} D`;
      hoursEl.innerHTML = `${hours} H`;
      minutesEl.innerHTML = `${minutes} M`;
      secondsEl.innerHTML = `${seconds} S`;
    }, 1000);
  }
  updateCountdown();
}

function closeBanner() {
  document.getElementById("banner").style.display = "none";
}

startCountdown(2 * 24 * 60 * 60 * 1000); // 2 days countdown

document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("cookiePopup");
    const agreeBtn = document.getElementById("agreeBtn");
  
    // Ensure popup is visible after animation completes
    setTimeout(() => {
      popup.style.opacity = "1";
      popup.style.visibility = "visible";
    }, 2000); // 2s delay as per animation timing
  
    // Hide popup when button is clicked
    agreeBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
      setTimeout(() => {
        popup.style.display = "none"; // Fully remove it
      }, 300); // Matches transition time
    });
  });
  