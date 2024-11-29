// Add animations on page load
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = 1;
            box.style.transform = "translateY(0)";
        }, index * 200); // Staggered animation
    });
});

// Initial hidden state for animation
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.style.opacity = 0;
    box.style.transform = "translateY(50px)";
    box.style.transition = "all 0.5s ease";
});
