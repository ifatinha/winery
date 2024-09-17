export class Wine {
  constructor(imageSource, name, price) {
    this._imageSource = imageSource;
    this._name = name;
    this._price = price;
  }

  get imageSource() {
    return this._imageSource;
  }

  set imageSource(imageSource) {
    if (imageSource) {
      this._imageSource = imageSource;
    }
  }

  get name() {
    return this._name;
  }

  set name(name){
    
  }

  get price() {
    return this._price;
  }
}
