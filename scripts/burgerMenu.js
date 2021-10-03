const burgerBtn = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const textContainer = document.querySelector(".text");
const projectContainer = document.querySelector(".project-container");
const homeBtn = document.getElementById("home-btn");
const projectBtn = document.getElementById("project-btn");
const logoBtn = document.querySelector(".logo");

// Burger-Menu
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    showcase.classList.toggle("active");
});

//Action inside menu

projectBtn.addEventListener("click", () => {
    textContainer.style.display = "none";
    projectContainer.style.display = "flex";
    showcase.classList.remove("active");
    burgerBtn.classList.remove("active");
});

homeBtn.addEventListener("click", () => {
    textContainer.style.display = "block";
    projectContainer.style.display = "none";
    showcase.classList.remove("active");
    burgerBtn.classList.remove("active");
});

logoBtn.addEventListener("click", () => {
    textContainer.style.display = "block";
    projectContainer.style.display = "none";
});
