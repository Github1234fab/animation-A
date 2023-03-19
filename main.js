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
for (let i = 0; i < 20; i++) {
  const firs = document.createElement("i");
  firs.classList.add("fa-sharp", "fa-solid", "fa-tree", "fa-2x", "fir");
  firs.style.left = i * 50 + "px";
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
  duration: 15,
  ease: "sine",
  y: "+=500px",
  repeat: -1,
});

pause(aniSnow, 15);

const aniSnowA = gsap.to(".snowflakeA", {
  duration: 20,
  ease: "sine",
  y: "+=500px",
  repeat: -1,
  delay: 1,
});
pause(aniSnowA, 15);

const aniSnowB = gsap.to(".snowflakeB", {
  duration: 15,
  ease: "sine",
  delay: 1,
  y: "+=500px",
  repeat: -1,
  delay: 1.4,
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

gsap.to(".mountain", {
  scale: 2,
  duration: 20,
  yoyo: true,
  repeat: -1,
  borderBottomColor: "orange",
  delay: 3,
  ease: "sine",
});

// animation ciel
gsap.to(".panorama_A", {
  backgroundImage: "linear-gradient(to left, #ff7f50, #ffd700)",
  duration: 20,
  ease: "slow",
  repeat: -1,
  yoyo: true,
  delay: 3,
});

// creation timelines
const tmCar = gsap.timeline();
const tmPlane = gsap.timeline();
const tmMoon = gsap.timeline();
const tmSun = gsap.timeline();
const tmheadlights = gsap.timeline();

// animation car
tmCar.to(".car", {
  x: 800,
  duration: 40,
  repeat: -1,
  ease: "power",
});

tmheadlights.to(".headlights", {
  x: 800,
  duration: 40,
  repeat: -1,
  ease: "slow",
});
setTimeout(function () {
  tmheadlights.pause();
  gsap.set(".headlights", { opacity: 0 });
}, 15000);

// animation avion
tmPlane
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

// animation sun
tmSun.add(
  gsap.to(".sunCircle", {
    rotation: 180,
    duration: 90,
    delay: 4.5,
  })
  // .add(
  //   gsap.to(".sunCirle", {
  //     rotation: 90,
  //     duration: 2,
  //     scale: 4,
  //   })
  // )
);

//animation moon
tmMoon.to(".moonCircle", {
  rotation: 180,
  duration: 50,
});
