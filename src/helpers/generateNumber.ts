export class GenerateNumber{
  static generateNumber() {
    return Math.floor(Math.random() * (10000 - 1000) + 1000);
  }
}