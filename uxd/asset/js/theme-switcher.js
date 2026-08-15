/**
 * @file theme-switcher.js
 * @description Manages the application's light/dark mode based on user preference and system settings.
 * @note To apply seasonal themes, ensure the exact attribute value matched in the CSS is applied to the root element, not the body (e.g., `<html data-theme="summer">`, not `<body data-theme="theme-summer">`).
 */
document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const themeButtons = document.querySelectorAll('[data-bs-theme-value]');
    const activeIcon = document.querySelector('.active-theme-icon');

    /**
     * Maps theme identifiers to their corresponding Bootstrap Icon classes.
     * @type {Object<string, string>}
     */
    const themeIcons = {
        light: 'bi-sun-fill',
        dark: 'bi-moon-stars-fill',
        auto: 'bi-circle-half'
    };

    /**
     * Sets the active light/dark mode for the application.
     * Updates the DOM attributes, dropdown UI state, and persists the user's choice in local storage.
     *
     * @param {string} theme - The theme to apply. Accepts 'light', 'dark', or 'auto'.
     */
    const setTheme = (theme) => {
        let resolvedTheme = theme;

        if (theme === 'auto') {
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            resolvedTheme = isSystemDark ? 'dark' : 'light';
        }

        htmlElement.setAttribute('data-bs-theme', resolvedTheme);

        if (activeIcon) {
            activeIcon.className = `bi ${themeIcons[theme]} me-2 active-theme-icon fs-5`;
        }

        localStorage.setItem('theme', theme);

        themeButtons.forEach((button) => {
            const isActive = button.getAttribute('data-bs-theme-value') === theme;
            button.classList.toggle('active', isActive);
        });
    };

    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-bs-theme-value');
            setTheme(theme);
        });
    });

    const savedTheme = localStorage.getItem('theme') || 'auto';
    setTheme(savedTheme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const currentTheme = localStorage.getItem('theme');
        if (!currentTheme || currentTheme === 'auto') {
            setTheme('auto');
        }
    });
});