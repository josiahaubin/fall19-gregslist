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
}