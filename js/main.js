const themeSwitcherBtn = document.getElementById('themeSwitcherBtn');
const THEME = {
    STORAGE_KEY: 'theme',
    LIGHT_THEME_KEY: 'light',
    DARK_THEME_KEY: 'dark',
    DARK_THEME_CLASS: 'dark-mode',
};

/**
 * Checks if theme was previously stored in local storage, and sets it accordingly.
 */
function validateTheme() {
    const storedTheme = getTheme();

    storedTheme && storedTheme === THEME.DARK_THEME_KEY ? setDarkTheme() : setLightTheme();
}

/**
 * Checks if dark mode is currently enabled.
 *
 * @returns `true` if dark mode is enabled, otherwise it will return `false`
 */
function isDarkModeEnabled() {
    return document.body.classList.contains(THEME.DARK_THEME_CLASS);
}

/**
 * Stores theme in local storage.
 *
 * @param {string} theme
 */
function storeTheme(theme) {
    localStorage.setItem(THEME.STORAGE_KEY, theme);
}

/**
 * Gets theme saved in local storage.
 *
 * @returns theme saved in local storage, if it exists, otherwise it will return `null`
 */
function getTheme() {
    return localStorage.getItem(THEME.STORAGE_KEY);
}

/**
 * - Removes dark theme class from `body`
 * - Saves theme in local storage
 */
function setLightTheme() {
    document.body.classList.remove(THEME.DARK_THEME_CLASS);
    storeTheme(THEME.LIGHT_THEME_KEY);
}

/**
 * - Adds dark theme class to `body`
 * - Saves theme in local storage
 */
function setDarkTheme() {
    document.body.classList.add(THEME.DARK_THEME_CLASS);
    storeTheme(THEME.DARK_THEME_KEY);
}

themeSwitcherBtn.addEventListener('click', () => {
    isDarkModeEnabled() ? setLightTheme() : setDarkTheme();
});

validateTheme();
