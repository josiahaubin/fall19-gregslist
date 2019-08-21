import JobService from "../services/JobService.js";

let _jobService = new JobService()

function _draw() {
  let template = ``
  let job = _jobService.Job

  job.forEach((job, index) => {
    template += job.Template
    template += `<button class="btn btn-danger" onclick="app.controllers.jobController.deleteJob(${index})">Delete Job</button></div>`
  });

  document.querySelector('#jobs').innerHTML = template
}

export default class JobController {
  constructor() {
    //console.log("job controller")
    _draw()
  }

  //Let service know that the user wants to add a job
  addJob(event) {
    event.preventDefault()

    let form = event.target

    let newJob = {
      company: form.company.value,
      logo: form.logo.value,
      title: form.title.value,
      payRate: form.payRate.value,
      description: form.description.value
    }

    _jobService.addJob(newJob)
    _draw()
  }

  //Let service know that the user wants to delete a job
  deleteJob(index) {
    _jobService.deleteJob(index)
    _draw()
  }
}