import {StateProps} from "./models/state.ts";

export const state: StateProps = {
    initialBackground: document.body.style.backgroundColor || '#ffffff',
    darkTheme: '' as string,
    isDark: false,
    button: null as HTMLButtonElement | null,
    newColor: '' as string,
    circle: null as HTMLElement | null,
};
