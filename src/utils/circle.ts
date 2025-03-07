import { Rect } from '../models/rect.js';
import { state } from '../state.js';

export const createCircle: (rect: Rect) => void = (rect: Rect): void => {
    state.circle = document.createElement('div');
    state.circle.classList.add('circle');
    document.body.appendChild(state.circle);

    const diameter: number = Math.max(window.innerWidth, window.innerHeight) * 2;
    const x: number = rect.left + rect.width / 2;
    const y: number = rect.top + rect.height / 2;

    state.circle.style.width = `${diameter}px`;
    state.circle.style.height = `${diameter}px`;
    state.circle.style.left = `${x - diameter / 2}px`;
    state.circle.style.top = `${y - diameter / 2}px`;

    state.circle.style.position = 'fixed';
    state.circle.style.borderRadius = '50%';
    state.circle.style.pointerEvents = 'none';
    state.circle.style.transform = 'scale(0)';
    state.circle.style.transition = 'transform 1s ease-out';

    state.circle.style.backgroundColor = state.newColor;
};

export const circlePropagation: () => void = (): void => {
    if (state.circle) {
        state.circle.style.transform = 'scale(2)';
    }
};

export const circleRemove: () => void = (): void => {
    if (state.circle) {
        state.circle.remove();
        state.circle = null;
    }
};