'use strict';

/* ==================================================
   FRAME & LIGHT — SERVICES PAGE SCRIPT
   Page-specific premium motion.
================================================== */

(function () {
    function initServicesHeroMotion() {
        if (!window.gsap) return;

        const hero = document.querySelector('.services-hero');
        const image = document.querySelector('.services-hero-bg img');
        const title = document.querySelector('.services-hero .page-title');
        const text = document.querySelector('.services-hero-copy p');
        const actions = document.querySelector('.services-hero .hero-actions');
        const panel = document.querySelector('.services-hero-panel');

        if (!hero) return;

        const timeline = window.gsap.timeline({
            defaults: {
                ease: 'power3.out'
            }
        });

        if (image) {
            timeline.fromTo(
                image,
                {
                    scale: 1.12,
                    opacity: 0.82
                },
                {
                    scale: 1.04,
                    opacity: 1,
                    duration: 1.35
                },
                0
            );
        }

        if (title) {
            timeline.fromTo(
                title,
                {
                    y: 38,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9
                },
                0.12
            );
        }

        if (text) {
            timeline.fromTo(
                text,
                {
                    y: 22,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.75
                },
                0.28
            );
        }

        if (actions) {
            timeline.fromTo(
                actions.children,
                {
                    y: 18,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.08
                },
                0.42
            );
        }

        if (panel) {
            timeline.fromTo(
                panel,
                {
                    x: 36,
                    opacity: 0,
                    rotate: 1.4
                },
                {
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    duration: 0.9
                },
                0.38
            );
        }
    }

    function initServicesTiltCards() {
        const cards = document.querySelectorAll('.services-page .tilt-card');

        cards.forEach((card) => {
            card.addEventListener('mousemove', (event) => {
                if (window.innerWidth < 920) return;

                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const rotateY = ((x / rect.width) - 0.5) * 6;
                const rotateX = ((y / rect.height) - 0.5) * -6;

                card.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                `;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    function initServiceCardKeyboardFocus() {
        const cards = document.querySelectorAll('.service-route-card');

        cards.forEach((card) => {
            card.addEventListener('focus', () => {
                card.classList.add('is-key-focused');
            });

            card.addEventListener('blur', () => {
                card.classList.remove('is-key-focused');
            });
        });
    }

    function initCompareMotion() {
        if (!window.gsap || !window.ScrollTrigger) return;

        window.gsap.registerPlugin(window.ScrollTrigger);

        const compareImage = document.querySelector('.compare-image');
        const compareContent = document.querySelector('.compare-content');
        const comparePoints = document.querySelectorAll('.compare-points div');

        if (compareImage) {
            window.gsap.fromTo(
                compareImage,
                {
                    y: 42,
                    opacity: 0.78
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.services-compare',
                        start: 'top 75%',
                        end: 'center center',
                        scrub: 0.8
                    }
                }
            );
        }

        if (compareContent) {
            window.gsap.fromTo(
                compareContent,
                {
                    y: 30,
                    opacity: 0.82
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.services-compare',
                        start: 'top 72%',
                        end: 'center center',
                        scrub: 0.9
                    }
                }
            );
        }

        if (comparePoints.length) {
            window.gsap.fromTo(
                comparePoints,
                {
                    x: 22,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.compare-points',
                        start: 'top 82%'
                    }
                }
            );
        }
    }

    function initChecklistHoverDepth() {
        const items = document.querySelectorAll('.review-check');

        items.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                items.forEach((currentItem) => {
                    if (currentItem !== item) {
                        currentItem.style.opacity = '0.58';
                    }
                });
            });

            item.addEventListener('mouseleave', () => {
                items.forEach((currentItem) => {
                    currentItem.style.opacity = '';
                });
            });
        });
    }

    function initRequestFormAccent() {
        const form = document.querySelector('.services-mini-form');

        if (!form) return;

        const controls = form.querySelectorAll('.form-control');

        controls.forEach((control) => {
            control.addEventListener('focus', () => {
                form.classList.add('is-active');
            });

            control.addEventListener('blur', () => {
                const hasFocusInside = form.contains(document.activeElement);

                if (!hasFocusInside) {
                    form.classList.remove('is-active');
                }
            });
        });
    }

    function init() {
        initServicesHeroMotion();
        initServicesTiltCards();
        initServiceCardKeyboardFocus();
        initCompareMotion();
        initChecklistHoverDepth();
        initRequestFormAccent();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();