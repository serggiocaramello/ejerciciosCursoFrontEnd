const imgs = document.querySelectorAll(".img");
const button = document.getElementById("button");

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.target.style.opacity = "0";
  });
});

button.addEventListener("click", (e) => {
  imgs.forEach((img) => {
    if ((img.style.opacity = "0")) {
      img.style.opacity = "1";
    }
  });
});
