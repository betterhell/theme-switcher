import { state } from '../state.js';

export const loadThemeFromStorage = (): void => {
    const savedTheme: string | null = localStorage.getItem('currentTheme');
    const savedIsDark: string | null = localStorage.getItem('isDark');

    if (savedTheme) {
        document.body.style.backgroundColor = savedTheme;
    } else {
        localStorage.setItem('currentTheme', state.initialBackground);
    }

    state.isDark = savedIsDark === 'true';
};

export const saveThemeToStorage = (): void => {
    localStorage.setItem('currentTheme', state.newColor);
    localStorage.setItem('isDark', String(state.isDark));
};