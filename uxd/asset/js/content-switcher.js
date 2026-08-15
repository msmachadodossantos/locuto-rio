/**
 * @file content-switcher.js
 * @description Provides a reusable content switching mechanism using event delegation 
 *              to manage active states and element visibility through CSS utility classes.
 */

/**
 * Initializes a content switcher utilizing event delegation.
 * Listens for click events on navigation links within a specified container, toggles their 
 * active state, and manages the visibility of corresponding target elements using display utility classes.
 *
 * @param {string} containerSelector - The CSS selector for the container element holding the navigation links.
 * @param {string} prefix - The prefix used for the IDs of the target content elements.
 * @param {string} [linkSelector='.nav-link'] - The CSS selector for the clickable navigation links.
 * @returns {void}
 */
function initializeContentSwitcher(containerSelector, prefix, linkSelector = '.nav-link') {
    const container = document.querySelector(containerSelector);

    if (!container) {
        return;
    }

    container.addEventListener('click', function (e) {
        const clickedLink = e.target.closest(linkSelector);

        if (!clickedLink || !container.contains(clickedLink)) {
            return;
        }

        e.preventDefault();

        const allLinks = container.querySelectorAll(linkSelector);
        allLinks.forEach(navItem => navItem.classList.remove('active'));
        clickedLink.classList.add('active');

        const targetElements = document.querySelectorAll(`[id^="${prefix}-"]`);
        targetElements.forEach(element => {
            element.classList.remove('d-block');
            element.classList.add('d-none');
        });

        const targetId = clickedLink.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.classList.remove('d-none');
            targetElement.classList.add('d-block');
        }
    });
}

initializeContentSwitcher() {
    document.addEventListener('DOMContentLoaded', () => {
        contentSwitcher('.module-menu', 'module-container', '.nav-link');
        contentSwitcher('.functionality-menu', 'functionality-container', '.nav-link');
    });
}
