(function () {
  const teamBtn = document.querySelectorAll(".team__name");
  const teamWrap = document.querySelectorAll(".team__wrap");
  const desc = document.querySelectorAll(".team__desc");
  // const triangle = document.querySelectorAll('.team__triangle')

  function hideAccardion() {
    for (let i = 0; i < teamWrap.length; i++) {
      teamWrap[i].style.height = "0px";
      teamWrap[i].classList.remove("active");
      // triangle[i].classList.remove('team__triangle-active')
    }
  }

  function showAccardion(i) {
    let height = getComputedStyle(desc[i]).height;
    teamWrap[i].style.height = height;
    teamWrap[i].classList.add("active");
    // triangle[i].classList.add('team__triangle-active')
  }

  for (let i = 0; i < teamBtn.length; i++) {
    let current = teamBtn[i];

    current.addEventListener("click", () => {
      if (teamWrap[i].classList.contains("active")) {
        hideAccardion();
      } else {
        hideAccardion();
        showAccardion(i);
      }
    });
  }
})();
