 const stars = document.getElementById("stars");

for (let i = 0; i < 80; i++) {
  const star = document.createElement("span");

  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";

  stars.appendChild(star);
}