export default class House {
  constructor(data) {
    this.price = data.price
    this.beds = data.beds
    this.baths = data.baths
    this.sqftHome = data.sqftHome
    this.sqftLot = data.sqftLot
    this.image = data.image
  }

  get Template() {
    return `
      <div class="col-4 border">
        <img src="${this.image}" alt="" class="img">
        <h1>Price: ${this.price}</h1>
        <h3>Beds: ${this.beds}</h3>
        <h3>Baths: ${this.baths}</h3>
        <h5>Sqft Home: ${this.sqftHome}</h5>
        <h5>Sqft Lot: ${this.sqftLot}</h5>
      `
  }
}