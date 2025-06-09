import colors from 'colors';

class Logger {
    private getDate() {
        return new Date().toLocaleString();
    }

    public error(msg: string) {
        console.log(colors.red(`[${this.getDate()}] `) + msg);
    }

    public info(msg: string) {
        console.log(colors.blue(`[${this.getDate()}] `) + msg);
    }
}

export default new Logger();
