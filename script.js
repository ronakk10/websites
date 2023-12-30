const wrapper = document.querySelector(".wraper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const gif = document.querySelector(".gif-image");

const wrapperReact = wrapper.getBoundingClientRect();
const noBtnReact = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Love You Too ❤️💕";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  gif.innerHTML = `<img src="./cat_love.gif" alt="gif" />`;
});

noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperReact.width - noBtnReact.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperReact.height - noBtnReact.height)) + 1;

  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});

