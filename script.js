/* ======================================================
   HMD SOFTWARE
   CLEAN SCRIPT.JS
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SMOOTH SCROLLING
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    /* =====================================
       COPY WALLET ADDRESS
    ===================================== */

    const copyButton = document.getElementById("copyWalletBtn");
    const walletAddress = document.getElementById("walletAddress");

    if (copyButton && walletAddress) {

        copyButton.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(walletAddress.textContent.trim());

                copyButton.textContent = "Copied ✓";

                showNotification("Wallet address copied successfully.");

                setTimeout(() => {

                    copyButton.textContent = "Copy Address";

                }, 2000);

            } catch (error) {

                showNotification("Unable to copy the wallet address.");

            }

        });

    }

    /* =====================================
       FAQ ACCORDION
    ===================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(other => {

                if (other !== item) {

                    other.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* =====================================
       PAYMENT FORM LOADING
    ===================================== */

    const paymentForm = document.getElementById("paymentForm");
    const submitBtn = document.getElementById("submitBtn");
    const buttonText = document.getElementById("buttonText");
    const loadingSpinner = document.getElementById("loadingSpinner");

    if (paymentForm && submitBtn) {

        paymentForm.addEventListener("submit", () => {

            submitBtn.disabled = true;

            buttonText.textContent = "Submitting...";

            loadingSpinner.style.display = "inline-block";

        });

    }
    /* =====================================
       SCROLL REVEAL ANIMATION
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".feature-card, .pricing-card, .testimonial-card, .payment-card, .qr-card, .contact-card"
    );

    function revealOnScroll() {

        const triggerPoint = window.innerHeight * 0.9;

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < triggerPoint) {

                element.classList.add("show");

            }

        });

    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}); // END DOMContentLoaded


/* =====================================
   TOAST NOTIFICATION
===================================== */

function showNotification(message) {

    const notification = document.createElement("div");

    notification.className = "toast-notification";

    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 50);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 2500);

}
