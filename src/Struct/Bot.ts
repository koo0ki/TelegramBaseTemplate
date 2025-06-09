import { run } from "@grammyjs/runner";
import {
    Bot,
    Context as GrammyContext,
    session,
    type SessionFlavor,
} from "grammy";
import Logger from "@src/Struct/Helpers/Logger";
import ModuleLoader from "@src/Struct/Helpers/ModuleLoader";
import {
    conversations,
    type ConversationFlavor,
} from "@grammyjs/conversations";
import { Utils } from "@src/Struct/Helpers/Utils";

interface SessionData {
    count: 0;
}

export type Context = GrammyContext & SessionFlavor<SessionData>;

export default class extends Bot<ConversationFlavor<Context>> {
    constructor(readonly token: string) {
        super(token);
    }

    private handlers = {
        Modules: new ModuleLoader(this),
    };

    public utils = new Utils(this);

    async run() {
        try {
            this.use(
                session({
                    initial: () => this.initial(),
                }),
            );
            this.use(conversations());

            await this.handlers.Modules.load();
            run(this);
            Logger.info(`${(await this.api.getMe()).username} is inited`);
        } catch (e) {
            Logger.error(String(e));
            process.exit(0);
        }
    }

    private initial(): SessionData {
        return { count: 0 };
    }
}
