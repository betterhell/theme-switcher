export const state = {
    initialBackground: document.body.style.backgroundColor || '#ffffff',
    darkTheme: '' as string,
    isDark: false,
    button: null as HTMLButtonElement | null,
    newColor: '' as string,
    circle: null as HTMLElement | null,
    timeoutId: 0 as number,
};