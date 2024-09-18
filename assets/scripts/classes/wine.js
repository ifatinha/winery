export class Wine {
  constructor({ imageSource, name, price, quantity }) {
    this.imageSource = imageSource;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotal() {
    return this.calculateTotal();
  }

  calculateTotal() {
    return this.price * this.quantity;
  }
}
