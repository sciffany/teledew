import Farm from "../Farm";
import Crop from "./Crop";

export default class Corn extends Crop {
  getEmoji(height: number): string {
    if (height < 1) {
      return "🟤";
    } else if (height <= 4) {
      return "🌱";
    } else {
      return "🌽";
    }
  }
}
