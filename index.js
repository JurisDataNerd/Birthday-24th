const openModal = document.getElementById('openModal');

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Setup scroll-triggered animations
document.querySelectorAll('.memory-section').forEach((section, index) => {
    const content = section.querySelector('.memory-content');
    const elements = content.children;

    // Create timeline for each section
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse'
        }
    });

    // Animate each element
    Array.from(elements).forEach((el, i) => {
        tl.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.2
        }, i * 0.2);
    });
});

// Navigation dots functionality
const navDots = document.querySelectorAll('.memory-nav button');
const sections = document.querySelectorAll('.memory-section');

// Update active dot based on scroll position
const updateActiveDot = () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - sectionHeight/3 && 
            scrollPosition < sectionTop + sectionHeight/3) {
            navDots.forEach(dot => dot.classList.remove('bg-white', 'scale-125'));
            navDots[index].classList.add('bg-white', 'scale-125');
        }
    });
};

// Smooth scroll to section when clicking dots
navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});

// Listen for scroll events
window.addEventListener('scroll', updateActiveDot);
window.addEventListener('resize', updateActiveDot);

// Initial update
updateActiveDot();

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.memory-section img').forEach(img => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        img.style.transform = `translateY(${yPos}px) scale(1.1)`;
    });
});
gsap.registerPlugin(ScrollTrigger);

        // Animate elements on scroll
        const aboutElements = document.querySelectorAll('.about-element');
        
        aboutElements.forEach((element, index) => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Parallax effect for background elements
        const bgElements = document.querySelectorAll('#about-dinda > div:first-child > div');
        
        bgElements.forEach(element => {
            gsap.to(element, {
                y: Math.random() * 100 - 50,
                scrollTrigger: {
                    trigger: "#about-dinda",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

