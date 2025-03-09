// const button = document.querySelector(".close");
// const card = document.querySelector(".card");
// button.addEventListener("click", function () {
//   card.style.display = "none";
// });

const button = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", function (e) {
//     // button[i].parentElement.style.display = "none";
//     //target => span.close
//     e.target.parentElement.style.display = "none";
//   });
// }

// for (const buttons of button) {
//   buttons.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

button.forEach((e) => {
  e.addEventListener("click", function (el) {
    el.target.parentElement.style.display = "none";
    //khusus element a (PREVENT DEFAULT)
    el.preventDefault();
  });
});
