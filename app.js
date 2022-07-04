const btns = document.querySelectorAll("#btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("show");
    });
});
