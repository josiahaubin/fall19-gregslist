import House from "../models/House.js";

let _state = {
  house: [new House({
    price: 250000,
    beds: 3,
    baths: 2,
    sqftHome: 1147,
    sqftLot: 6839,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/W.H.H._Clayton_House.JPG/1200px-W.H.H._Clayton_House.JPG"
  })]
}

export default class HouseService {
  constructor() {
    //console.log("car service")
  }

  addHome(newHome) {
    _state.house.push(new House(newHome))
  }

  deleteHome(index) {
    _state.house.splice(index, 1)
  }

  get House() {
    return _state.house.map(house => new House(house))
  }
}