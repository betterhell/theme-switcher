export const throttle = (mainFunction: any, delay: number) => {
    let timerFlag: number | null = null;

    return (...args: any[]): void => {
        if (timerFlag === null) {
            mainFunction(...args);
            timerFlag = setTimeout((): void => {
                timerFlag = null;
            }, delay);
        }
    };
}