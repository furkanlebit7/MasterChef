function init() {
  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelectorAll(".chef");
  const backgroundColors = [
    `radial-gradient(#165B8F, #222024)`,
    `radial-gradient(#787582, #281A49)`,
    `radial-gradient(#5F6E97, #0C111F)`,
  ];
  let current = 0;
  slides.forEach((slide, index) => {
    slide.addEventListener("click", function () {
      changeDots(this);
      nextSlide(index);
    });
  });

  function changeDots(dot) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    dot.classList.add("active");
  }
  function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector(".hero .chef-left");
    const nextRight = nextPage.querySelector(".hero .chef-right");
    const currentLeft = currentPage.querySelector(".hero .chef-left");
    const currentRight = currentPage.querySelector(".hero .chef-right");
    const nextText = nextPage.querySelectorAll(".details");
    const portofolio = document.querySelector(".portofolio");

    const tl = new TimelineMax();

    tl.fromTo(currentLeft, 0.3, { y: "-10%" }, { y: "-100%" })
      .fromTo(currentRight, 0.3, { y: "10%" }, { y: "-100%" }, "-=0.2")
      .to(portofolio, 0.3, { backgroundImage: backgroundColors[pageNumber] })
      .fromTo(
        currentPage,
        0.3,
        { opacity: 1, pointerEvents: "all" },
        { opacity: 0, pointerEvents: "none" }
      )
      .fromTo(
        nextPage,
        0.3,
        { opacity: 0, pointerEvents: "none" },
        { opacity: 1, pointerEvents: "all" },
        "-=0.3s"
      )
      .fromTo(nextLeft, 0.3, { y: "-100%" }, { y: "-10%" }, "-=0.9s")
      .fromTo(nextRight, 0.3, { y: "-100%" }, { y: "10%" }, "-=1.1s")
      .fromTo(nextText, 0.3, { opacity: 0, y: 0 }, { opacity: 1, y: 0 })
      .set(nextLeft, { clearProps: "all" })
      .set(nextRight, { clearProps: "all" });
    current = pageNumber;
  }
}
init();

// const cards = document.querySelectorAll(".card");

// const getYarismaciName = function () {
//   cards.forEach((item) => {
//     item.addEventListener("click", function () {
//       let name = item.childNodes[3].innerHTML;

//       getJSON(name);
//     });
//   });
// };
// getYarismaciName();

// const getJSON = function (name) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "data.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       let yarismacilar = JSON.parse(this.responseText);
//       let html = "";
//       yarismacilar.forEach((person) => {
//         if (person.name === name) {
//           html = `
//                             <div class="yarismaci-img" id="yarismaci__img">
//                             <img src="${person.image}" alt="${person.name}">
//                             </div>
//                             <div class="yarismaci-des">
//                             <h3 id="yarismaci__kimdir">${person.name} Kimdir ?</h3>
//                             <p id="yarismaci__budur">${person.info}</p>
//                                 </div>

//                         `;
//         }
//       });
//       let element = document.querySelector(".yarismaci-section");
//       if (typeof element != "undefined" && element != null)
//         element.innerHTML = "Found .yarismaci-section";
//       else console.log("başaramadık");
//     }
//   };

//   xhr.send();
// };
