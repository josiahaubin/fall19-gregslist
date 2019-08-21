export default class Job {
  constructor(data) {
    this.company = data.company
    this.logo = data.logo
    this.title = data.title
    this.payRate = data.payRate
    this.description = data.description
  }

  get Template() {
    return `
      <div class="col-4 border">
        <img src="${this.logo}" alt="" class="img">
        <h1>${this.company}</h1>
        <h1>${this.title}</h1>
        <h3>Pay Rate: ${this.payRate}</h3>
        <p>${this.description}</p>
      
    `
  }
}