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
  "./assets/images/fake.jpeg",
  "./assets/images/partofcamer.png",
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

   const leftBtn = document.querySelector(".backward-btn");
   const rightBtn = document.querySelector(".forward-btn");
   

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

