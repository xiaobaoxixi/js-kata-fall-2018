"use strict";

window.addEventListener("DOMContentLoaded", init);
function init() {
  const area = document.querySelector("#circle-area");
  for (let i = 0; i < 100; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    let radius = Math.random() * 70;
    let top = Math.random() * 10;
    let left = Math.random() * 90;
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`;
    circle.style.top = `calc(${top}vh - ${radius / 2}px)`;
    circle.style.left = `${left}vw`;
    area.appendChild(circle);
  }
  for (let i = 0; i < 50; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    let radius = Math.random() * 70;
    let top = Math.random() * 10;
    let left = Math.random() * 50;
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`;
    circle.style.top = `${top + 10}vh`;
    circle.style.left = `${left}vw`;
    area.appendChild(circle);
  }
  for (let i = 0; i < 70; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    let radius = Math.random() * 70;
    let top = Math.random() * 70;
    let left = Math.random() * 10;
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`;
    circle.style.top = `${top + 10}vh`;
    circle.style.left = `calc(${left}vh - ${radius / 2}px)`;
    area.appendChild(circle);
  }
  for (let i = 0; i < 30; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    let radius = Math.random() * 70;
    let top = Math.random() * 50;
    let left = Math.random() * 10;
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`;
    circle.style.top = `${top + 15}vh`;
    circle.style.left = `${left + 10}vh`;
    area.appendChild(circle);
  }
  changeColor();
}
function changeColor() {
  const allCircleS = document.querySelectorAll(".circle");
  allCircleS.forEach(c => {
    c.addEventListener("mouseenter", assignColor);
  });
  function assignColor(m) {
    let color = `hsl(${Math.random() * 360}, 40%, 50%)`;
    m.target.style.backgroundColor = color;
  }
}
