import Bot, { type Context } from '@src/Struct/Bot';
import { Composer } from 'grammy';

export default class StartModule extends Composer<Context> {
    constructor(private bot: Bot) {
        super();
        this.bot.use(this);

        this.command('start', async ctx => {
            ctx.reply([`<b>Hello</b>, how are you?`].join('\n'), {
                parse_mode: 'HTML'
            });
        });
    }
}
