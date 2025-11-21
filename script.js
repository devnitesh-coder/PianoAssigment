let A = document.querySelector("#A");
let S = document.querySelector("#S");
let D = document.querySelector("#D");
let F = document.querySelector("#F");
let J = document.querySelector("#J");
let K = document.querySelector("#K");
let L = document.querySelector("#L");
let N = document.querySelector("#n");

let audio = [
  {
    key: "A",
    url: "./sounds/28.mp3",
  },
];

let aud;
let key = "";

document.body.addEventListener("keydown", function (dets) {
  key = dets.code;

  if (key === "KeyA") {
    aud = new Audio("./sounds/28.mp3");
    aud.play();
    let color = setInterval(() => {
      A.style.backgroundColor = "red";
      A.style.scale = 1.2
    }, 100);
    setTimeout(() => {
      clearInterval(color);
      A.style.backgroundColor = "white";
      A.style.scale = 1
    }, 200);
  } else if (key === "KeyS") {
    console.log(key)
    aud = new Audio("./sounds/29.mp3");
    aud.play();
    let color = setInterval(() => {
      S.style.backgroundColor = "red";
      S.style.scale = 1.2
    }, 100);
    setTimeout(() => {
      clearInterval(color);
      S.style.backgroundColor = "white";
      S.style.scale = 1
    }, 200);
  } else if (key === "KeyD") {
    aud = new Audio("./sounds/30.mp3");
    aud.play();
    let color = setInterval(() => {
      D.style.backgroundColor = "red";
      D.style.scale = 1.2
    }, 100);
    setTimeout(() => {
      clearInterval(color);
      D.style.backgroundColor = "white";
      D.style.scale = 1
    }, 200);
  } else if (key === "KeyF") {
    aud = new Audio("./sounds/31.mp3");
    aud.play();
    let color = setInterval(() => {
      F.style.backgroundColor = "red";
      F.style.scale = 1.2
    }, 100);
    setTimeout(() => {
      clearInterval(color);
      F.style.backgroundColor = "white";
      F.style.scale = 1
    }, 200);
  } else if (key === "KeyJ") {
    aud = new Audio("./sounds/32.mp3");
    aud.play();
    let color = setInterval(() => {
      J.style.backgroundColor = "red";
      J.style.scale = 1.2
    }, 100);
    setTimeout(() => {
      clearInterval(color);
      J.style.backgroundColor = "white";
      J.style.scale = 1
    }, 200);
  } else if (key === "KeyK") {
    aud = new Audio("./sounds/33.mp3");
    aud.play();
    let color = setInterval(() => {
      K.style.backgroundColor = "red";
      K.style.scale = 1.2
    }, 100);
    setTimeout(() => {
      clearInterval(color);
      K.style.backgroundColor = "white";
      K.style.scale = 1
    }, 200);
  } else if (key === "KeyL") {
    aud = new Audio("./sounds/34.mp3");
    aud.play();
    let color = setInterval(() => {
      L.style.backgroundColor = "red";
      L.style.scale = 1.2
    }, 100);
    setTimeout(() => {
      clearInterval(color);
      L.style.backgroundColor = "white";
      L.style.scale = 1
    }, 200);
  } else if (key === "Semicolon") {
    aud = new Audio("./sounds/35.mp3");
    aud.play();
    let color = setInterval(() => {
      N.style.backgroundColor = "red";
      N.style.scale = 1.2
    }, 100);
    setTimeout(() => {
      clearInterval(color);
      N.style.backgroundColor = "white";
      N.style.scale = 1
    }, 200);
  } else {
    alert("You Pressed wrong key!");
  }
});
