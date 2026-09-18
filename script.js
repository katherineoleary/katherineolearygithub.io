/* =========================================
   KATHERINE O'LEARY PORTFOLIO
   ========================================= */


/* ---------- SCROLL FADE-IN ANIMATIONS ---------- */

const animatedElements = document.querySelectorAll(
    ".section-heading, .about-grid, .experience-item, .education-card, .leadership-card, .skills-layout, .contact-section"
);

animatedElements.forEach((element) => {
    element.classList.add("fade-in");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {
    observer.observe(element);
});


/* ---------- NAVIGATION ACTIVE STATE ---------- */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");


const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navigationLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* ---------- CLOSE MOBILE-STYLE BEHAVIOR ON LINK CLICK ---------- */

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigationLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});
