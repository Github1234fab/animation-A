for (let i = 0; i < 100; i++) {
  var snowflake = document.createElement("div");
  var snowflakeA = document.createElement("div");
  var snowflakeB = document.createElement("div");

  snowflake.classList.add("snowflake");
  snowflakeA.classList.add("snowflakeA");
  snowflakeB.classList.add("snowflakeB");

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflakeA.style.left = Math.random() * window.innerWidth + "px";
  snowflakeB.style.left = Math.random() * window.innerWidth + "px";

  snowflake.style.top = Math.random() * window.innerHeight + "px";
  snowflakeA.style.top = Math.random() * window.innerHeight + "px";
  snowflakeB.style.top = Math.random() * window.innerHeight + "px";

  document.querySelector(".snowflakes").appendChild(snowflake);
  document.querySelector(".snowflakes").appendChild(snowflakeA);
  document.querySelector(".snowflakes").appendChild(snowflakeB);
}

for (let i = 0; i < 30; i++) {
  const barricades = document.createElement("div");
  barricades.classList.add("barricades");
  barricades.style.left = i * 40 + "px";
  barricades.style.top = "-7px";
  document.querySelector(".road").appendChild(barricades);
}

const tm = gsap.timeline();

const pause = (animation, duration) => {
  setTimeout(() => {
    animation.pause();
  }, duration * 1000);
}

const aniSnow = gsap.to(".snowflake", {
  duration: 15,
  ease: "sine",
  y: "+=500px",
  repeat: -1,
});

pause(aniSnow, 15);

const aniSnowA = gsap.to(".snowflakeA", {
  duration: 15,
  ease: "sine",
  y: "+=500px",
  repeat: -1,
});
pause(aniSnowA, 15);

const aniSnowB= gsap.to(".snowflakeB", {
  duration: 15,
  ease: "sine",
  delay: 1,
  y: "+=500px",
  repeat: -1,
});
pause(aniSnowB, 15);




gsap.to(".mountain", {
  scale: 2,
  duration: 20,
  yoyo: true,
  repeat: -1,
  borderBottomColor: "orange",
  delay: 3,
  ease: "sine",
});

gsap.to(".panorama_A", {
  backgroundImage: "linear-gradient(to right, #ff7f50, #ffd700)",
  duration: 20,
  ease: "sine",
  repeat: -1,
  yoyo: true,
  delay: 3,
});

tm.to(".car", {
  x: 800,
  duration: 40,
  repeat: -1,
  ease: "power",
});
