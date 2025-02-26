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
    button.textContent = "Pause Nasheed";
                } else {
        audio.pause();
    button.textContent = "Play Nasheed";
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
    let ourSection = document.querySelector(".time");

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
// =============================================================================
document.addEventListener("DOMContentLoaded", function () {
    let ourSection = document.querySelector(".close");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ourSection.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(ourSection);
});
// =============================================================================
function copyToClipboard(id) {
    var text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor rekening berhasil disalin!");
    }).catch(err => {
        console.error("Gagal menyalin", err);
    });
}
// =============================================================================
var SangatPasti = "Assalamualaikum, halo tya & upi, wah selamat ya semoga kalian menjadi keluarga yang sakinah, mawaddah, warahmah. tentu saja aku gak bakal melewatkan kesempatan ini...aku pasti hadir dipernikahan kalian"
var pasti = "Assalamualaikum, halo tya & upi, wah selamat ya semoga kalian menjadi keluarga yang sakinah, mawaddah, warahmah. Insyallah aku pasti hadir dipernikahan kalian"
var KurangPasti = "Assalamualaikum, halo tya & upi, wah selamat ya semoga kalian menjadi keluarga yang sakinah, mawaddah, warahmah. Sebelumnya mohon maaf banget nih kyknya aku ada urusan lain, tapi aku usahain hadir kok dipernikahan kalian"

var encodeMessage1 = encodeURIComponent(SangatPasti)
var encodeMessage2 = encodeURIComponent(pasti)
var encodeMessage3 = encodeURIComponent(KurangPasti)

var number = "6281386225719"

var walink1 = "https://wa.me/" + number + "?text=" + encodeMessage1;
var walink2 = "https://wa.me/" + number + "?text=" + encodeMessage2;
var walink3 = "https://wa.me/" + number + "?text=" + encodeMessage3;


window.onload = function () {
    document.getElementById("whatsapplink1").href = walink1;
    document.getElementById("whatsapplink2").href = walink2;
    document.getElementById("whatsapplink3").href = walink3;
};