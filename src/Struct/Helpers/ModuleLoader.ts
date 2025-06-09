import fs from 'fs';
import type Bot from '@src/Struct/Bot';
import Logger from '@src/Struct/Helpers/Logger';

export default class ModuleLoader {
    private readonly dir: string;

    constructor(private readonly bot: Bot) {
        this.dir = `${__dirname}/../../Modules`;
    }

    public async load() {
        try {
            const dirs = fs.readdirSync(this.dir);
            for (const dir of dirs) {
                const modules = fs
                    .readdirSync(this.dir + '/' + dir)
                    .filter(f => f.endsWith('.ts') && f.includes('Module'));

                for (const module of modules) {
                    const ModuleClass = (await import('@src/Modules/' + dir + '/' + module)).default;
                    new ModuleClass(this.bot);

                    Logger.info(`Module [${module}] is loaded`);
                }
            }
        } catch (e) {
            Logger.error(String(e));
        }
    }
}
