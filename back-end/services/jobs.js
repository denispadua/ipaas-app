const jobModel = require('../models/jobs');

const getFilter = (query) => {

    const { user, createdat } = query;

    if (user) return { user };
    if (createdat) return { createdAt: createdat };
    return {}

}

const getJobs = async (filter, page, limit) => {
    try {
        return await jobModel.find(filter, null, { skip: page * limit, limit: limit }).exec();
    }
    catch (error) {
        return error;
    }
}


const countJobs = async (filter) => {
    try {
        var count = await jobModel.countDocuments(filter);
        return count;
    }
    catch (error) {
        return 0;
    }
}

const createJob = async (body) => {

    body.createdAt = new Date().toLocaleDateString('pt-BR');

    const job = new jobModel(body);

    try {
        const newJob = await job.save();
        return newJob;
    }
    catch (err) {
        return err;
    }
}

const updateJob = async (id, body) => {

    try {
        return await jobModel.findByIdAndUpdate(id, body).exec()
    }
    catch (err) {
        return err;
    }
}

module.exports = {
    getFilter,
    getJobs,
    countJobs,
    createJob,
    updateJob
}

