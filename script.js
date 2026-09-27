/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });


    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

        });

    });

}



/* =====================================================
   HERO SLIDER
===================================================== */

const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".dot");

const nextButton = document.getElementById("nextSlide");

const prevButton = document.getElementById("prevSlide");


let currentSlide = 0;

let slideTimer;



function showSlide(index) {

    if (!slides.length) {
        return;
    }


    if (index >= slides.length) {

        currentSlide = 0;

    } else if (index < 0) {

        currentSlide = slides.length - 1;

    } else {

        currentSlide = index;

    }


    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === currentSlide
        );

    });

}



function nextSlide() {

    showSlide(currentSlide + 1);

}



function prevSlide() {

    showSlide(currentSlide - 1);

}



function startSlider() {

    if (!slides.length) {
        return;
    }


    slideTimer = setInterval(() => {

        nextSlide();

    }, 5000);

}



function restartSlider() {

    clearInterval(slideTimer);

    startSlider();

}



if (nextButton) {

    nextButton.addEventListener("click", () => {

        nextSlide();

        restartSlider();

    });

}



if (prevButton) {

    prevButton.addEventListener("click", () => {

        prevSlide();

        restartSlider();

    });

}



dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        restartSlider();

    });

});


startSlider();



/* =====================================================
   WHATSAPP FORM
===================================================== */

const whatsappForm =
    document.getElementById("whatsappForm");


if (whatsappForm) {

    whatsappForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const phone =
            document.getElementById("phone").value.trim();


        const service =
            document.getElementById("service").value;


        const message =
            document.getElementById("message").value.trim();


        const whatsappMessage =
`السلام عليكم، أريد الاستفسار عن خدماتكم.

الاسم: ${name}

رقم الجوال: ${phone}

الخدمة المطلوبة: ${service}

تفاصيل الطلب:
${message}`;


        const whatsappURL =
            `https://wa.me/966594434863?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}



/* =====================================================
   HEADER SHADOW
===================================================== */

const header =
    document.getElementById("header");


if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    });

}