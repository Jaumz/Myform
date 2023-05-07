const btn = document.querySelector(".btn");
const form = document.querySelector(".form");

var position;

btn.addEventListener("mouseover", function () {
    if (!form.checkValidity()) {
        if (position === 100) {
            position = -100;
        } else {
            position = 100;
        }
        btn.style.transform = `translate(${position}px, 0px)`;
        btn.style.transition = "all 0.3s ease";
    } else {
        position = 0;
        btn.style.transform = `translate(${position}px, 0px)`;
        btn.style.transition = "all 0.3s ease";
    }
});
