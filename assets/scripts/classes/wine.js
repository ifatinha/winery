export class Wine {
  constructor({ imageSource, name, price, quantity }) {
    this.code = this.getId();
    this.imageSource = imageSource;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getId() {
    return `item_${Math.random().toString(36).substring(2, 9)}`;
  }

  getTotal() {
    return this.calculateTotal();
  }

  calculateTotal() {
    return this.price * this.quantity;
  }
}
