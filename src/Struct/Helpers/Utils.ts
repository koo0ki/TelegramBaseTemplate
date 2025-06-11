import type Bot from '@src/Struct/Bot';

export class Utils {
    constructor(private bot: Bot) {
        this.bot = bot;
    }

    public random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public arrayRandom(array: any[]) {
        return array[this.random(0, array.length - 1)];
    }

    public resolveNumber(num: number) {
        return String(num)
            .split('')
            .reverse()
            .map((v, i) => {
                if ((i + 1) % 3 === 0 && num.toString().length - 1 !== i) {
                    return ` ${v}`;
                } else {
                    return v;
                }
            })
            .reverse()
            .join('');
    }
}
