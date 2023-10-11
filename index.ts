import { Telegraf } from "telegraf";
import Farm from "./src/Farm";
import Inventory from "./src/Inventory";

require("dotenv").config();

const bot = new Telegraf(process.env.TELEGRAM_API_KEY as string);
const farm: Farm = new Farm();
const inventory: Inventory = new Inventory();
bot.launch();
bot.hears(/\/show farm/, async (ctx) => {
  ctx.reply(farm.showFarm());
});
bot.hears(/\/show inv/, async (ctx) => {
  ctx.reply(inventory.showInventory());
});
bot.hears(/^\/plant (.*)$/, async (ctx) => {
  farm.plant(ctx.match[1]);

  ctx.reply(farm.showFarm() + inventory.showInventory());
});

// Enable graceful stop
process.once("SIGINT", () => {
  bot.stop("SIGINT");
});
process.once("SIGTERM", () => {
  bot.stop("SIGTERM");
});
