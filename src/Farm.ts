import Corn from "./plants/Corn";
import Crop from "./plants/Crop";

export default class Farm {
  private farm = Array<Plant | null>();
  private farmHeight = 10;
  private farmWidth = 10;

  constructor() {
    for (let i = 0; i < this.farmHeight; i++) {
      this.farm[i] = null;
    }
  }

  public showFarm() {
    let farmString = "Farm:\n";
    for (let i = 0; i < this.farmHeight; i++) {
      const plant = this.farm[i];
      const emoji = plant ? plant.crop.getEmoji(plant.height) : Tile._0;
      for (let j = 0; j < this.farmWidth; j++) {
        farmString += emoji;
      }
      farmString += "\n";
    }
    return farmString;
  }

  public plant(crop: string) {
    const Crop = this.getCropMap()[crop];
    const cropInstance = new Crop() as Crop;
    const firstEmpty = this.farm.findIndex((plant) => plant === null);
    if (firstEmpty === -1) {
      throw new Error("Farm is full");
    } else {
      this.farm[firstEmpty] = {
        crop: cropInstance,
        height: 0,
      };
    }
  }

  private getCropMap() {
    return {
      corn: Corn,
    };
  }
}

enum Tile {
  _0 = "🟫",
}

type Plant = {
  crop: Crop;
  height: number;
};
