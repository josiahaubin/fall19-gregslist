import Job from "../models/Job.js";


let _state = {
  jobs: [({
    company: "ABC Company",
    logo: "http://www.splitsuit.com/wp-content/uploads/2013/06/abc-poker.png",
    title: "Boss man",
    payRate: "$100/hr",
    description: "Be the boss man, get paid like the boss man"
  })]
}

export default class JobService {
  constructor() {
    //console.log("job service")
  }

  addJob(newJob) {
    _state.jobs.push(new Job(newJob))
  }

  deleteJob(index) {
    _state.jobs.splice(index, 1)
  }

  get Job() {
    return _state.jobs.map(job => new Job(job))
  }
}