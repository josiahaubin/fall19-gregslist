import HouseService from "../services/HouseService.js";

let _houseService = new HouseService

function _draw() {
  let template = ``
  let house = _houseService.House

  house.forEach((house, index) => {
    template += house.Template
    template += `<button class="btn btn-danger" onclick="app.controllers.houseController.deleteHome(${index})">Delete Home</button></div>`
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

  //let services know that user wants to delete a home
  deleteHome(index) {
    _houseService.deleteHome(index)
    _draw()
  }

}