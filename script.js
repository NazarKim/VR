const menuToggle = document.getElementById('menu-toggle');
const menuIconSpans = document.querySelectorAll('.menu-icon span');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        menuItems.style.display = 'block';
        menuItems.style.opacity = '1';
        menuItems.style.visibility = 'visible';
        menuItems.style.transform = 'translateX(-100%)';
        menuIconSpans[0].style.transform = 'translateY(10px) rotate(45deg)';
        menuIconSpans[1].style.opacity = '0';
        menuIconSpans[2].style.transform = 'translateY(-10px) rotate(-45deg)';
        menuItems.style.transition = 'transform 0.3s ease-in-out';
        setTimeout(function() {
            menuItems.style.transform = 'translateX(0)';
        }, 10);
    } else {
        menuItems.style.opacity = '0';
        menuItems.style.visibility = 'hidden';
        menuIconSpans[0].style.transform = 'translateY(0) rotate(0)';
        menuIconSpans[1].style.opacity = '1';
        menuIconSpans[2].style.transform = 'translateY(0) rotate(0)';
        menuItems.style.transition = 'transform 0.3s ease-in-out';
        menuItems.style.transform = 'translateX(-100%)';
        setTimeout(function() {
            menuItems.style.display = 'none';
        }, 300);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        let windowHeight = window.innerHeight;

        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add("visible");
            }
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

