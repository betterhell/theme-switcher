import { Rect } from './models/rect.js';
import { state } from './state.js';

import {throttle} from "./utils/throttle.ts";

import { createCircle, circlePropagation, circleRemove } from './utils/circle.js';
import { loadThemeFromStorage, saveThemeToStorage } from './utils/storage.js';

const checkButtonAttributeColor = (): void => {
    const darkThemeAttr = state.button!.getAttribute('aria-dark-theme') as string | null;
    state.darkTheme = darkThemeAttr || '#333333';
};

const changeBackground = (): void => {
    document.body.style.backgroundColor = state.newColor;
    state.isDark = !state.isDark;
    saveThemeToStorage();
};

export const themeSwitch: () => void = (): void => {
    state.button = document.querySelector('.themeButton') as HTMLButtonElement;

    if (!state.button) {
        console.error("Add class \'.themeButton\' to the button");
        return;
    }

    state.button.addEventListener('click', throttle((): void => {
        const rect: Rect = state.button!.getBoundingClientRect();

        checkButtonAttributeColor();

        state.newColor = state.isDark ? state.initialBackground : state.darkTheme;

        createCircle(rect);

        setTimeout(() => {
            circlePropagation();
        }, 10);

        setTimeout(() => {
            changeBackground();
        }, 600);

        setTimeout(() => {
            circleRemove();
        }, 800);
    }, 800));
};

document.addEventListener('DOMContentLoaded', (): void => {
    loadThemeFromStorage();
    themeSwitch();
});