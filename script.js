/*var try = document.getElementsByClass('bold');

// Add a mouseover event listener
try.addEventListener('mouseover', () => {
  // Change the button's background color
  try.style.color = 'blue';
});
*/

const press = document.getElementById("jsbut");

let pressButton = function () {
  press.style.backgroundColor = "#000000";
  press.style.color = "#FFFFFF";
};

press.addEventListener("mousedown", pressButton);

/*
let square = document.getElementsByClassName("square4");

let hover = function () {
  square.style.backgroundImage = "none";
};

square.addEventListener("mouseover", hover);*/

/*
const faqquestions = document.getElementsByClassName("questbox");
const faqbutton = document.getElementById("faqbut");
const faqanswers = document.getElementsByClassName("answers");

let openFaq = function () {
  faqanswers.style.display = "block";
};

faqquestions.addEventListener("click", openFaq);
faqbutton.addEventListener("click", openFaq);

var faqquestions = document.getElementsByClassName("questbox");
var faqbutton = document.getElementById("faqbut");
var faqanswers = document.getElementsByClassName("answers");

for (var i = 0; i < faqquestions.length; i++) {
  faqquestions[i].onclick = function () {
    var setClasses = !this.classList.contains("active");
    setClass(faqquestions, "active", "remove");
    setClass(answers, "show", "remove");

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  };
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}
*/
const faqs = document.querySelectorAll(".faq");
for (const item of faqs) {
  const curr_faq = item.childNodes;
  console.log(curr_faq);
  const question = curr_faq[0];
  const answer = curr_faq[1];
  const icon = question.querySelector(".icon-main");
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
