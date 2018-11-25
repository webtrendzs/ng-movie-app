export class Rating {
  source: string;
  value: string;
  constructor(rating) {
    this.source = rating.Source;
    this.value = rating.Value;
  }
}
