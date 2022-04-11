const userModel = require('../models/users');
const bcrypt = require('bcrypt')

const getFilter = (query) => {

    const { name, createdat } = query;

    if (name) return { name };
    if (createdat) return { createdAt: createdat };
    return {}

}

const createUser = async ({ body }) => {

    body.createdAt = new Date().toLocaleDateString('pt-BR');

    const passwordEncrypted = await bcrypt.hash(body.password, 10);

    body.password = passwordEncrypted;

    const user = new userModel(body);

    try {
        const newUser = await user.save();
        return newUser;
    }
    catch (err) {
        return err;
    }

}

const updateUser = async ({ id }, { body }) => {

    try {
        return await userModel.findByIdAndUpdate(id, body).exec();
    }
    catch (e) {
        return e;
    }

}


const getUsers = async (filter, page, limit) => {
    try {
        return await userModel.find(filter, ['-password'], { skip: page * limit, limit: limit }).exec();
    }
    catch (error) {
        return error;
    }
}

const countUsers = async (filter) => {
    try {
        var count = await userModel.countDocuments(filter);
        return count;
    }
    catch (error) {
        return 0;
    }
}


module.exports = {
    getFilter,
    getUsers,
    countUsers,
    createUser,
    updateUser
}