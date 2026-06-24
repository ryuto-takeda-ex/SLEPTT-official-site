window.addEventListener("load", () => {

  const elements = document.querySelectorAll(".abt, .wis");

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        obs.unobserve(e.target);
      }
    });
  }, {
    threshold: 0
  });

  elements.forEach(el => obs.observe(el));

});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

observer.observe(document.querySelector(".Tracks"));
observer.observe(document.querySelector(".MISSION"));
observer.observe(document.querySelector(".aim"));

document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
    });