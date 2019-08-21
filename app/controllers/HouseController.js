import HouseService from "../services/HouseService.js";

let _houseService = new HouseService

function _draw() {
  let template = ``
  let house = _houseService.House

  house.forEach(house => {
    template += house.Template
  });

  document.querySelector('#houses').innerHTML = template
}

export default class HouseController {
  constructor() {
    //console.log("car controller")
    _draw()
  }

  //let services know that user wants to add a home
  addHome(event) {
    event.preventDefault()

    let form = event.target

    let newHome = {
      price: form.price.value,
      beds: form.beds.value,
      baths: form.baths.value,
      sqftHome: form.sqftHome.value,
      sqftLot: form.sqftLot.value,
      image: form.image.value
    }

    _houseService.addHome(newHome)
    _draw()

  }
}