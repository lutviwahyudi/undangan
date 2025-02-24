//===================== fungsi untuk memutar musik audio ==================
    document.addEventListener("DOMContentLoaded", function () {
            var audio = document.getElementById("myAudio");
    var button = document.getElementById("bukaUndangan");

            audio.play().then(() => {
        button.textContent = "Pause Musik";
            }).catch(error => {
        console.log("Autoplay diblokir oleh browser:", error);
            });

    button.addEventListener("click", function () {

        let home = document.getElementById("home");
        document.body.style.overflow = "auto";
        home.classList.add("show-home");
        home.scrollIntoView({ behavior: "smooth" });

                if (audio.paused) {
        audio.play();
    button.textContent = "Undangan terbuka";
                } else {
        audio.pause();
    button.textContent = "Undangan";
                }
            });
        });
// ===========================================================================
document.addEventListener("DOMContentLoaded", function () {
    let homeSection = document.querySelector(".home");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeSection.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(homeSection);
});
// ============================================================================
document.addEventListener("DOMContentLoaded", function () {
    let ourSection = document.querySelector(".our");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ourSection.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(ourSection);
});
// ============================================================================