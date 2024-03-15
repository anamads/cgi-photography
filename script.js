

const press = document.getElementById("jsbut");

let pressButton = function () {
  press.style.backgroundColor = "#000000";
  press.style.color = "#FFFFFF";
};

press.addEventListener("mousedown", pressButton);


const faqs = document.querySelectorAll('.faq');
for (const item of faqs) {
  const curr_faq = item.childNodes;
  console.log(curr_faq);
  const question = curr_faq[0];
  const answer = curr_faq[1];
  const icon = question.querySelector('.icon-main');
  icon.addEventListener("click", function () {
    answer.classList.toggle("non-active");
    const i = icon.querySelector("faqbut");
    i.classList.toggle("fa-xmark");
    i.classList.toggle("fa-plus");
  });
}

const hamb = document.tophead.getElementById("hamburger-icon");
const burgerlong = document.tophead.querySelector(".hamburger");

let pressham = function () {
  hamb.style.display = "none";
  burgerlong.style.display = "flex";
  burgerlong.style.flexDirection = "column";
};
hamb.addEventListener("click", pressham);
