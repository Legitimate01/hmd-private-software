/* =====================================
   HMD PRIVATE SOFTWARE COMPANY
   SCRIPT.JS
===================================== */

/* COPY WALLET ADDRESS */

const copyBtn = document.getElementById("copyWalletBtn");
const walletAddress = document.getElementById("walletAddress");

if (copyBtn && walletAddress) {

copyBtn.addEventListener("click", () => {

navigator.clipboard.writeText(walletAddress.innerText);

copyBtn.innerText = "Copied!";

setTimeout(() => {

copyBtn.innerText = "Copy Address";

}, 2000);

showNotification(
"Wallet address copied successfully."
);

});

}

/* FAQ ACCORDION */

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const answer =
question.nextElementSibling;

const isOpen =
answer.style.display === "block";

document
.querySelectorAll(".faq-answer")
.forEach(item => {

item.style.display = "none";

});

if (!isOpen) {

answer.style.display = "block";

}

});

});

/* PAYMENT FORM */

const paymentForm =
document.getElementById("paymentForm");

if(paymentForm){

paymentForm.addEventListener(
"submit",
async function(event){

event.preventDefault();

const formData =
new FormData(paymentForm);

const data = {

fullname:
formData.get("fullname"),

email:
formData.get("email"),

package:
formData.get("package"),

txid:
formData.get("txid")

};

try{

await fetch(
"https://script.google.com/macros/s/AKfycbw4YsbjiKx9GBwGJQ-_vbgG2hoXpoR9OJy2Uzu0iAuFtFB-uIIBfSC6dDw1tfhIID_KBQ/exec",
{
method:"POST",
body:JSON.stringify(data)
}
);

showNotification(
"Payment confirmation submitted successfully."
);

paymentForm.reset();

}catch(error){

showNotification(
"Submission failed. Please try again."
);

}

});

}

/* SCROLL ANIMATION */

const revealElements =
document.querySelectorAll(
".feature-card, .pricing-card, .testimonial-card, .payment-card, .qr-card"
);

const revealOnScroll = () => {

revealElements.forEach(element => {

const windowHeight =
window.innerHeight;

const elementTop =
element.getBoundingClientRect().top;

if (elementTop < windowHeight - 80) {

element.style.opacity = "1";

element.style.transform =
"translateY(0px)";

}

});

};

revealElements.forEach(element => {

element.style.opacity = "0";
element.style.transform =
"translateY(40px)";
element.style.transition =
"all 0.6s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* NOTIFICATION SYSTEM */

function showNotification(message) {

let notification =
document.createElement("div");

notification.innerText =
message;

notification.style.position =
"fixed";

notification.style.bottom =
"30px";

notification.style.right =
"30px";

notification.style.background =
"#d4af37";

notification.style.color =
"#07111f";

notification.style.padding =
"14px 20px";

notification.style.borderRadius =
"10px";

notification.style.fontWeight =
"600";

notification.style.boxShadow =
"0 10px 30px rgba(0,0,0,.3)";

notification.style.zIndex =
"9999";

notification.style.opacity =
"0";

notification.style.transition =
"all .3s ease";

document.body.appendChild(
notification
);

setTimeout(() => {

notification.style.opacity = "1";

}, 100);

setTimeout(() => {

notification.style.opacity = "0";

setTimeout(() => {

notification.remove();

}, 300);

}, 3000);

}

/* ACTIVE NAVIGATION */

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
section.offsetTop;

if (
pageYOffset >= sectionTop - 200
) {

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove(
"active"
);

if (
link.getAttribute("href") ===
`#${current}`
) {

link.classList.add(
"active"
);

}

});

}
);

/* PRELOADER EFFECT */

window.addEventListener(
"load",
() => {

document.body.style.opacity =
"1";

}
);
