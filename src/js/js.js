const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");

// btnOpenModal.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hideen");
//   })
// );

// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   }
// });

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

const box01 = document.querySelector(".box-01");
const box02 = document.querySelector(".box-02");
const box03 = document.querySelector(".box-03");
const box04 = document.querySelector(".box-04");
const box05 = document.querySelector(".box-05");
const box06 = document.querySelector(".box-06");
const box07 = document.querySelector(".box-07");
const box08 = document.querySelector(".box-08");
const box09 = document.querySelector(".box-09");
const box10 = document.querySelector(".box-10");

const option = {
  root: null,
  threshold: 0,
};

const boxCallBack = (entries, ob, deg) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove("hidden");
    entry.target.style.transform = `rotate(${deg}deg)`;
    entry.target.style.transitionDuration = "0.2s";
    entry.target.style.transitionDelay = "0.5s";
  }
  ob.unobserve(entry.target);
};

const boxObserver1 = new IntersectionObserver(function (e, o) {
  boxCallBack(e, o, 45);
}, option);
const boxObserver2 = new IntersectionObserver(function (e, o) {
  boxCallBack(e, o, 0);
}, option);
const boxObserver3 = new IntersectionObserver(function (e, o) {
  boxCallBack(e, o, 40);
}, option);
const boxObserver4 = new IntersectionObserver(function (e, o) {
  boxCallBack(e, o, 45);
}, option);
const boxObserver5 = new IntersectionObserver(function (e, o) {
  boxCallBack(e, o, -135);
}, option);
const boxObserver6 = new IntersectionObserver(function (e, o) {
  boxCallBack(e, o, -45);
}, option);
const boxObserver7 = new IntersectionObserver(function (e, o) {
  boxCallBack(e, o, -35);
}, option);

boxObserver1.observe(box01);
boxObserver2.observe(box02);
boxObserver3.observe(box03);
boxObserver4.observe(box04);
boxObserver5.observe(box05);
boxObserver6.observe(box06);
boxObserver7.observe(box07);

// const boxCallBackScale = (entries, ob, para) => {
//   const [entry] = entries;
//   if (entry.isIntersecting) {
//     entry.target.style.transform = `scaleX(${para}) scaleY(1) perspective(50rem) rotateY(-10deg) rotateX(7deg) rotateZ(-1deg) `;
//     entry.target.style.transitionDuration = "0.5s";
//     entry.target.style.transitionDelay = "0.2s";
//   }
//   ob.unobserve(entry.target);
// };
const boxCallBackScale = (entries, ob, para, z) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.style.transform = `  rotateZ(${z}deg) scaleX(${para}) scaleY(1)`;
    entry.target.style.transitionDuration = "0.5s";
    entry.target.style.transitionDelay = "0.2s";
  }
  ob.unobserve(entry.target);
};

const boxScale8 = new IntersectionObserver(function (e, o) {
  boxCallBackScale(e, o, -30, -3);
}, option);
const boxScale9 = new IntersectionObserver(function (e, o) {
  boxCallBackScale(e, o, 5, 25);
}, option);
const boxScale10 = new IntersectionObserver(function (e, o, x, y, z) {
  boxCallBackScale(e, o, 15, 30);
}, option);

boxScale8.observe(box08);
boxScale9.observe(box09);
boxScale10.observe(box10);
