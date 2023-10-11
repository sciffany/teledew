export default class Inventory {
  private inventory = new Array<number>();

  constructor() {
    this.inventory = [0, 1, 2];
  }

  public showInventory() {
    let inventoryString = "Inventory: ";
    for (let i = 0; i < this.inventory.length; i++) {
      inventoryString += Item[`_${this.inventory[i]}`];
    }
    return inventoryString;
  }
}

enum Item {
  _0 = "⛏️",
  _1 = "🪓",
  _2 = "🌽",
  _4 = "🍅",
}
