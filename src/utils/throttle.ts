export const throttle = (mainFunction: any, delay: number) => {
    let timerFlag: number | null = null;

    return (...args: any[]) => {
        if (timerFlag === null) {
            mainFunction(...args);
            timerFlag = setTimeout(() => {
                timerFlag = null;
            }, delay);
        }
    };
}