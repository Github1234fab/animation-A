// creation des flocons de neige. 3 groupes de flocons pour jouer sur l'opacité. snowflake, snowflakeA, snowllakeB
for (let i = 0; i < 100; i++) {
  var snowflake = document.createElement("div");
  var snowflakeA = document.createElement("div");
  var snowflakeB = document.createElement("div");

  // ajout de la classe
  snowflake.classList.add("snowflake");
  snowflakeA.classList.add("snowflakeA");
  snowflakeB.classList.add("snowflakeB");

  // ajout d'un placement aléatoire left sur le window.innerWidth
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflakeA.style.left = Math.random() * window.innerWidth + "px";
  snowflakeB.style.left = Math.random() * window.innerWidth + "px";

  // ajout d'un placement aléatoire top sur le window.innerHeight
  snowflake.style.top = Math.random() * window.innerHeight + "px";
  snowflakeA.style.top = Math.random() * window.innerHeight + "px";
  snowflakeB.style.top = Math.random() * window.innerHeight + "px";

  // attribution de l'enfant au parent
  document.querySelector(".snowflakes").appendChild(snowflake);
  document.querySelector(".snowflakes").appendChild(snowflakeA);
  document.querySelector(".snowflakes").appendChild(snowflakeB);
}

// creation des sapins
for (let i = 0; i < 16; i++) {
  const firs = document.createElement("i");
  firs.classList.add("fa-sharp", "fa-solid", "fa-tree", "fa-2x", "fir");
  firs.style.left = i * 75 + "px";
  firs.style.top = "-25px";
  document.querySelector(".road").appendChild(firs);
}

// fonction pause pour l'attribuer à chaque animation
const pause = (animation, duration) => {
  setTimeout(() => {
    animation.pause();
  }, duration * 1000);
};

// animation snow
const aniSnow = gsap.to(".snowflake", {
  duration: 8,
  ease: "sine",
  y: "+=500px",
  // repeat: -1,
});

pause(aniSnow, 10);

const aniSnowA = gsap.to(".snowflakeA", {
  duration: 8,
  ease: "sine",
  y: "+=500px",
  // repeat: -1,
});
pause(aniSnowA, 15);

const aniSnowB = gsap.to(".snowflakeB", {
  duration: 8,
  ease: "sine",
  delay: 1,
  y: "+=500px",
  // repeat: -1,
});
pause(aniSnowB, 15);

setTimeout(() => {
  aniSnow.pause();
  aniSnowA.pause();
  aniSnowB.pause();
  gsap.set(".snowflake", {
    opacity: 0,
  });
  gsap.set(".snowflakeA", {
    opacity: 0,
  });
  gsap.set(".snowflakeB", {
    opacity: 0,
  });
}, 15000);

// animation montagne

let mountain = gsap.to(".mountain", {
  scale: 1.5,
  duration: 11,
  yoyo: true,
  repeat: -1,
  borderBottomColor: "orange",
  ease: "sine",
  delay: 3,
});
pause(mountain, 30);

// animation ciel
let ciel = gsap.to(".panorama_A", {
  backgroundImage: "linear-gradient(to left, #ff7f50, #ffd700)",
  duration: 12,
  // ease: "power",
  repeat: -1,
  yoyo: true,
  delay: 3,
});
pause(ciel, 25);

// creation timelines
const tmCar = gsap.timeline();
const tmPlane = gsap.timeline();
const tmMoon = gsap.timeline();
const tmSun = gsap.timeline();
const tmheadlights = gsap.timeline();
const tmTractor = gsap.timeline();
const tmMoto = gsap.timeline();

// animation car
let car = tmCar.to(".car", {
  x: 800,
  duration: 19,
  // repeat: -1,
  ease: "",
});
tmCar.addPause(10.1);
setTimeout(function () {
  tmCar.play();
}, 19000);
pause(car, 30);

// animation des phares
const headlightsDuration = 17;
function turnOnHeadlights() {
  gsap.set(".headlights", { opacity: 1 });
}

let headLights = tmheadlights.to(".headlights", {
  x: 800,
  duration: 19,
  // repeat: -1,
  ease: "",
});
tmheadlights.addPause(10.2, function () {
  gsap.set(".headlights", { opacity: 0 });
});
setTimeout(function () {
  tmheadlights.play();
  gsap.set(".headlights", { opacity: 1 });
}, 19000);
pause(headLights, 30);

let tractor = tmTractor.to(".tractor", {
  x: -900,
  duration: 19,
  // repeat: -1,
  ease: "none",
});

// animation avion
let plane = tmPlane
  .add(
    gsap.to(".plane", {
      x: 340,
      duration: 10,
      ease: "none",
    })
  )
  .add(
    gsap.to(".plane", {
      x: 400,
      y: -80,
      transform: "rotate(-60deg)",
      ease: "none",
      duration: 3,
    })
  )

  .add(
    gsap.to(".plane", {
      x: 800,
      y: -500,
      duration: 17,
      transform: "rotate(-30deg)",
      ease: "none",
      scale: 0.2,
    })
  );
pause(plane, 30);

// animation sun
// tmSun.add(
let sun = gsap.to(".sunCircle", {
  rotation: 180,
  duration: 36,
  delay: 2.8,
  repeat: -1,
});
pause(sun, 30);

//animation moon
let moon = tmMoon.to(".moonCircle", {
  rotation: 180,
  duration: 24,
  repeat: -1,
});
pause(moon, 20);

let moto = tmMoto.to(".moto", {
  x: 800,
  duration: 19,
  // repeat: -1,
});
