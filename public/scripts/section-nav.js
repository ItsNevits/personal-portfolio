// Navegación entre secciones

function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (window.location.pathname !== '/') return;
        switch(e.key) {
            case 'ArrowDown':
            case 'PageDown':
                e.preventDefault();
                window.scrollToNextSection?.();
                break;
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                window.scrollToPreviousSection?.();
                break;
            case 'Home':
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'End':
                e.preventDefault();
                document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
        }
    });
}

function updateNavButtonsState() {
    const navContainer = document.getElementById('section-nav');
    if (!navContainer) return;
    const currentSection = getCurrentVisibleSection();
    const sections = ['about', 'technologies'];
    const currentIndex = sections.indexOf(currentSection);
    if (window.location.pathname === '/') {
        navContainer.classList.remove('opacity-0');
    } else {
        navContainer.classList.add('opacity-0');
        return;
    }
    const upButton = document.getElementById('nav-up');
    const downButton = document.getElementById('nav-down');
    if (!upButton || !downButton) return;
    upButton.style.display = currentIndex > 0 ? 'block' : 'none';
    downButton.style.display = currentIndex < sections.length - 1 ? 'block' : 'none';
}

function getCurrentVisibleSection() {
    let maxVisibility = 0;
    let mostVisibleSectionId = 'about';
    const sections = ['about', 'technologies'];
    const viewportHeight = window.innerHeight;
    for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
            if (visibleHeight > maxVisibility) {
                maxVisibility = visibleHeight;
                mostVisibleSectionId = sectionId;
            }
        }
    }
    return mostVisibleSectionId;
}

window.scrollToNextSection = function() {
    const currentSection = getCurrentVisibleSection();
    const sections = ['about', 'technologies'];
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
        const nextSection = document.getElementById(sections[currentIndex + 1]);
        nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

window.scrollToPreviousSection = function() {
    const currentSection = getCurrentVisibleSection();
    const sections = ['about', 'technologies'];
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
        const prevSection = document.getElementById(sections[currentIndex - 1]);
        prevSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initKeyboardNavigation();
    updateNavButtonsState();
});
window.addEventListener('load', () => {
    if (document.readyState === 'complete') {
        updateNavButtonsState();
    }
});
let scrollTimeout;
document.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
    }
    scrollTimeout = window.setTimeout(() => {
        updateNavButtonsState();
    }, 100);
}); 