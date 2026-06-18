// =========================
// FAQ ACCORDION
// =========================

document.addEventListener("DOMContentLoaded", () => {

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const answer =
question.nextElementSibling;

document
.querySelectorAll(".faq-answer")
.forEach(item => {

if(item !== answer){

item.style.maxHeight = null;

}

});

if(answer.style.maxHeight){

answer.style.maxHeight = null;

}else{

answer.style.maxHeight =
answer.scrollHeight + "px";

}

});

});

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// =========================
// HEADER SHADOW
// =========================

window.addEventListener(
"scroll",
() => {

const header =
document.querySelector("header");

if(!header) return;

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 25px rgba(0,0,0,.15)";

}else{

header.style.boxShadow =
"none";

}

});

// =========================
// REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(
".service-card, .why-card, .review-card, .stat-box, .contact-card"
);

function revealOnScroll(){

revealElements.forEach(el => {

const windowHeight =
window.innerHeight;

const elementTop =
el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.style.opacity = "1";

el.style.transform =
"translateY(0)";

}

});

}

revealElements.forEach(el => {

el.style.opacity = "0";

el.style.transform =
"translateY(40px)";

el.style.transition =
"all .8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// =========================
// ACTIVE NAV LINK
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

if(
window.scrollY >= sectionTop
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove(
"active"
);

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add(
"active"
);

}

});

});

// =========================
// STATS COUNTER
// =========================

const counters =
document.querySelectorAll(
".stat-box h3"
);

counters.forEach(counter => {

const text =
counter.innerText;

const target =
parseInt(text);

if(!isNaN(target)){

let count = 0;

const updateCounter = () => {

count += Math.ceil(
target / 40
);

if(count < target){

counter.innerText = count + "+";

requestAnimationFrame(
updateCounter
);

}else{

counter.innerText = text;

}

};

updateCounter();

}

});

// =========================
// PAGE LOAD
// =========================

window.addEventListener(
"load",
() => {

document.body.style.opacity =
"1";

});

console.log(
"Tela Dental Clinic Website Loaded Successfully"
);
