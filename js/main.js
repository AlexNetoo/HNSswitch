// Elements
const themeSwitcherBtn = document.getElementById('themeSwitcherBtn');
const navbarBrandLogo = document.getElementById('navbarBrandLogo');
const heroTitleLogo = document.getElementById('heroTitleLogo');
const heroAppImg = document.getElementById('heroAppImg');

const imagesFolder = 'assets/images/';
/**
 * Object containing all the properties related to light and dark themes.
 */
const THEME = {
    STORAGE_KEY: 'theme',
    LIGHT: {
        THEME_KEY: 'light',
        THEME_BTN_TEXT: 'Light Theme',
        NAVBAR_BRAND_LOGO_IMG_SRC: `${imagesFolder}logo_blue_x4.png`,
        HERO_TITLE_LOGO_IMG_SRC: `${imagesFolder}hns_logo_dark.png`,
        HERO_APP_IMG_SRC: `${imagesFolder}4x_light_mockup.png`,
    },
    DARK: {
        THEME_KEY: 'dark',
        THEME_CLASS: 'dark-mode',
        THEME_BTN_TEXT: 'Dark Theme',
        NAVBAR_BRAND_LOGO_IMG_SRC: `${imagesFolder}logo_white_x4.png`,
        HERO_TITLE_LOGO_IMG_SRC: `${imagesFolder}hns_logo_white.png`,
        HERO_APP_IMG_SRC: `${imagesFolder}4x_dark_mockup.png`,
    },
};

/**
 * Checks if theme was previously stored in local storage, and sets it accordingly.
 */
function validateTheme() {
    const storedTheme = getTheme();

    storedTheme && storedTheme === THEME.DARK.THEME_KEY ? setDarkTheme() : setLightTheme();
}

/**
 * Checks if dark mode is currently enabled.
 *
 * @returns `true` if dark mode is enabled, otherwise it will return `false`
 */
function isDarkModeEnabled() {
    return document.body.classList.contains(THEME.DARK.THEME_CLASS);
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
 * - Replaces theme switcher button's text accordingly
 * - Replaces all images with their light mode version
 * - Saves theme in local storage
 */
function setLightTheme() {
    document.body.classList.remove(THEME.DARK.THEME_CLASS);
    themeSwitcherBtn.innerText = THEME.DARK.THEME_BTN_TEXT;
    navbarBrandLogo.src = THEME.LIGHT.NAVBAR_BRAND_LOGO_IMG_SRC;
    heroTitleLogo.src = THEME.LIGHT.HERO_TITLE_LOGO_IMG_SRC;
    heroAppImg.src = THEME.LIGHT.HERO_APP_IMG_SRC;
    storeTheme(THEME.LIGHT.THEME_KEY);
}

/**
 * - Adds dark theme class to `body`
 * - Replaces theme switcher button's text accordingly
 * - Replaces all images with their dark mode version
 * - Saves theme in local storage
 */
function setDarkTheme() {
    document.body.classList.add(THEME.DARK.THEME_CLASS);
    themeSwitcherBtn.innerText = THEME.LIGHT.THEME_BTN_TEXT;
    navbarBrandLogo.src = THEME.DARK.NAVBAR_BRAND_LOGO_IMG_SRC;
    heroTitleLogo.src = THEME.DARK.HERO_TITLE_LOGO_IMG_SRC;
    heroAppImg.src = THEME.DARK.HERO_APP_IMG_SRC;
    storeTheme(THEME.DARK.THEME_KEY);
}

themeSwitcherBtn.addEventListener('click', () => {
    isDarkModeEnabled() ? setLightTheme() : setDarkTheme();
});

validateTheme();
