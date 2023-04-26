// To setup an array of images sources
let imgSrcArray = [
  "./assets/images/anglocrisis.jpeg",
  "./assets/images/attaque-voiture.jpg",
  "./assets/images/natTeam.jpeg",
  "./assets/images/deep237.jpeg",
  "./assets/images/deepcamer.jpeg",
  "./assets/images/mCrace.jpeg",
  "./assets/images/how-to-have-water.jpeg",
  "./assets/images/raracni.jpeg",
  "./assets/images/trafficant.jpeg",
  "./assets/images/stopsteeling.jpeg",
  "./assets/images/oldman.jpeg",
  "./assets/images/new-coming-bank-paper.jpg",
  "./assets/images/free.jpeg",
  "./assets/images/partofcamer.png",
  "./assets/images/natèbroasdcasttv.jpeg",
  "./assets/images/newcameroon.jpg",
  "./assets/images/inovation.jpeg",
  "./assets/images/coins.jpeg",
  "./assets/images/investin237.jpeg",
  "./assets/images/wiki.png",
  "./assets/images/wining.jpeg",
  "./assets/images/cocoa.jpeg",
  "./assets/images/banga.jpeg",
];

// let imgSrcArray = ["./assets/`${images/}`"];

//function that make images sliding
function slider() {
  let currPosition = 0;
  let timer = setInterval(function () {
    document.querySelector(".image").src = imgSrcArray[currPosition];
    if (currPosition == imgSrcArray.length) {
      currPosition = 0;
    }
    currPosition++;
  }, 3000);

  const leftBtn = document.querySelector(".backward");
  const rightBtn = document.querySelector(".forward");

  leftBtn.addEventListener("click", () => {
    clearInterval(timer);
    document.querySelector(".image").src = imgSrcArray[currPosition - 1];
    if (currPosition == imgSrcArray.length) {
      currPosition = 0;
    }
    currPosition++;
  });

  rightBtn.addEventListener("click", () => {
    clearInterval(timer);
    document.querySelector(".image").src = imgSrcArray[currPosition + 1];
    if (currPosition == imgSrcArray.length) {
      currPosition = 0;
    }
    currPosition++;
  });
}
slider();
