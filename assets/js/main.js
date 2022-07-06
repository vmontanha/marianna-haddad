function openNav() {
          document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
          document.getElementById("myNav").style.width = "0%";
}

gsap.from(".home__logo", { duration: 1, y: -300, opacity: 0 });
gsap.from(".container__box", { duration: 2, opacity: 0, delay: 3 });