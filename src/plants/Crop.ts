import Farm from "../Farm";

export default abstract class Crop {
  public plant(farm: Farm) {}
  public abstract getEmoji(height: number): string;
}
