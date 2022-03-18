// let checkheader = document.querySelector("header");

const checkheader = () => {
  // check the position of the scroll
  let checkPosition = Math.round(window.scrollY);

  // if the scroll position is greater than 100px than show the sticky header
  if (checkPosition > 100) {
    document.querySelector("header").classList.add("sticky");
  }
  // if not! remove the sticky header header
  else {
    document.querySelector("header").classList.remove("sticky");
  }
};

window.addEventListener("scroll", checkheader);
