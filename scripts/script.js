// Random Color Generator function

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");

let intervalID;
const startChangingColor = function () {
  // ? NULL safety check
    if (!intervalID) {
      intervalID = setInterval(changBgAuto, 500);
    }


function changBgAuto() {
    const boxBody = document.getElementById('color-box');
    boxBody.style.backgroundColor = randomColor();

    const p = document.getElementById('color-box');
    p.innerText = randomColor();
}

};
const stopChangingColor = function () {
    clearInterval(intervalID);
    intervalID = null;
};

btnStart.addEventListener("click", startChangingColor);

btnStop.addEventListener("click", stopChangingColor);
