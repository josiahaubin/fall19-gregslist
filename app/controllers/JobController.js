import JobService from "../services/JobService.js";

let _jobService = new JobService()

function _draw() {
  let template = ``
  let job = _jobService.Job

  job.forEach((job, index) => {
    template += job.Template
    template += `<button class="btn btn-danger" onclick="app.controller.jobController.deleteJob(${index})">Delete Job</button></div>`
  });

  document.querySelector('#jobs').innerHTML = template
}

export default class JobController {
  constructor() {
    //console.log("job controller")
    _draw()
  }
}