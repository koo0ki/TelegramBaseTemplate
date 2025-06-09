import { type ConversationFlavor } from '@grammyjs/conversations';
import Bot, { type Context } from '@src/Struct/Bot';
import { Composer } from 'grammy';

export default class StartModule extends Composer<ConversationFlavor<Context>> {
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
