const service = require('../services/jobs');

const getJobs = async ({ query }, res) => {

  let { page, limit } = query;

  page = page ? page : 0;
  limit = limit ? limit : 10;

  const filter = service.getFilter(query);

  const jobData = await service.getJobs(filter, page, limit);

  const numberOfPages = await service.countJobs(filter)

  return res.status(200).json({
    data: jobData,
    size: numberOfPages
  });

};

const createJob = async ({ body }, res) => {

  jobData = await service.createJob(body);

  return res.status(201).json({ job: jobData });

};

const updateJob = async (req, res) => {

  const { id } = req.params;

  const jobData = await service.updateJob(id, req.body);

  return res.status(200).json({
    data: jobData,
    msg: 'ok'
  })

};

module.exports = {
  getJobs,
  createJob,
  updateJob,
};
