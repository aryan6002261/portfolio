const items = document.querySelectorAll(".item");
const content = document.querySelector(".content");

const pages = {
    About: {
        text: `
        <h2>About Me</h2>
        <p>Hello! I'm an aspiring web developer who enjoys creating beautiful websites.</p>
        `,
        color: "linear-gradient(135deg,#89f7fe,#66a6ff)"
    },

    Projects: {
        text: `
        <h2>Projects</h2>
        <ul>
            <li>Portfolio Website</li>
            <li>Weather App</li>
            <li>To-Do List</li>
        </ul>
        `,
        color: "linear-gradient(135deg,#f6d365,#fda085)"
    },

    Certifications: {
        text: `
        <h2>Certifications</h2>
        <p>HTML • CSS • JavaScript • Python</p>
        `,
        color: "linear-gradient(135deg,#84fab0,#8fd3f4)"
    },

    Contact: {
        text: `
        <h2>Contact</h2>
        <p>Email: example@email.com</p>
        `,
        color: "linear-gradient(135deg,#ff9a9e,#fad0c4)"
    }
};

// Fade in page
document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s";

window.onload = () => {
    document.body.style.opacity = "1";
};

// Set active tab
function activate(item) {

    items.forEach(btn => {
        btn.style.background = "";
        btn.style.color = "black";
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "";
    });

    item.style.background = "linear-gradient(135deg,#667eea,#764ba2)";
    item.style.color = "white";
    item.style.transform = "scale(1.05)";
    item.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

    const page = pages[item.textContent];

    content.style.opacity = "0";

    setTimeout(() => {
        content.innerHTML = page.text;
        content.style.backgroundImage = page.color;
        content.style.opacity = "1";
    }, 250);
}

content.style.transition = "0.3s";

items.forEach(item => {

    item.style.transition = "0.3s";

    item.addEventListener("click", () => activate(item));

    // Hover animation
    item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-3px)";
    });

    item.addEventListener("mouseleave", () => {
        if (item.style.color !== "white")
            item.style.transform = "translateY(0)";
    });

    // Ripple effect
    item.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "15px";
        ripple.style.height = "15px";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.7)";
        ripple.style.pointerEvents = "none";
        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";
        ripple.style.transform = "translate(-50%,-50%) scale(0)";
        ripple.style.transition = ".6s";
        ripple.style.position = "absolute";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);

        requestAnimationFrame(() => {
            ripple.style.transform = "translate(-50%,-50%) scale(18)";
            ripple.style.opacity = "0";
        });

        setTimeout(() => ripple.remove(), 600);

    });

});

// Activate first tab
activate(items[0]);

// Keyboard navigation
let current = 0;

document.addEventListener("keydown", e => {

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        current = (current + 1) % items.length;
        activate(items[current]);
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        current--;
        if (current < 0) current = items.length - 1;
        activate(items[current]);
    }

});