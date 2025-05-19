import Bot from "@src/Struct/Bot";
import { system } from "@config";
import Logger from "@src/Struct/Helpers/Logger";

console.clear();

new Bot(system.token).run();

process.on("unhandledRejection", (reason, p) => {
    Logger.error(`${reason}`);
});

process.on("uncaughtException", (err, origin) => {
    Logger.error(`${err}`);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
    Logger.error(`${err}`);
});
