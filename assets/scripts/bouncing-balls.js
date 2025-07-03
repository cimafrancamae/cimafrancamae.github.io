const colors = ["#f5d17f", "#8c64d6", "#e55ec3", "#9caf88", "#e07b5d"];
const numBalls = 50;
const balls = [];
const container = document.getElementById("background-balls");

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add(
    "absolute", "rounded-full", "opacity-70", "-z-10"
  );

  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  const size = `${Math.random()}em`;
  ball.style.width = size;
  ball.style.height = size;

  balls.push(ball);
  container.append(ball);
}

balls.forEach((el, i) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});