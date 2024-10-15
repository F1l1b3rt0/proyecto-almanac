document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    const btnleft = document.querySelector("#btn-left");
    const btnright = document.querySelector("#btn-right");

    // Inserta la última sección al principio
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);

    function moverderecha() {
        let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 0.5s";
        setTimeout(function() {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    function moverizquierda() {
        let sliderSection = document.querySelectorAll(".slider-section");
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function() {
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionLast);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    // Eventos para mover el slider con los botones
    btnright.addEventListener('click', function() {
        moverderecha();
    });

    btnleft.addEventListener('click', function() {
        moverizquierda();
    });

    // Movimiento automático del slider cada 5 segundos
    setInterval(function() {
        moverderecha();
    }, 5000);
});
