document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});

function getGreeting() {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const greetingElement = document.createElement("h2");
    greetingElement.textContent = greeting;
    greetingElement.style.color = "#3498db";
    document.querySelector(".hero-content").prepend(greetingElement);
}

document.addEventListener("DOMContentLoaded", getGreeting);

function typeEffect(element, speed) {
    const text = element.textContent;
    element.textContent = "";
    let i = 0;

    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    const missionStatement = document.querySelector(".hero p");
    typeEffect(missionStatement, 100);
});

const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const description = item.getAttribute("data-description");
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = description;
        document.body.appendChild(tooltip);

        const rect = item.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    });

    item.addEventListener("mouseleave", () => {
        document.querySelector(".tooltip").remove();
    });
});

document.querySelector(".logo").addEventListener("click", () => {
    const logo = document.querySelector(".logo");
    logo.style.transition = "transform 0.5s";
    logo.style.transform = "rotate(360deg) scale(1.2)";
    setTimeout(() => {
        logo.style.transform = "rotate(0deg) scale(1)";
    }, 500);
    alert("You found an Easter egg!");
});
