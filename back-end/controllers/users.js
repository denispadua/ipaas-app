const service = require('../services/users')

const getUsers = async ({ query }, res) => {

  let { page, limit } = query;

  page = page ? page : 0;
  limit = limit ? limit : 10;

  const filter = service.getFilter(query);

  const data = await service.getUsers(filter, page, limit);
  const size = await service.countUsers(filter);
  const totalPages = Math.ceil(size / limit);

  return res.status(200).json({
    user: data,
    size: size,
    nav: `${page} of ${totalPages}`,
  });
};

const createUser = async (req, res) => {

  const userData = await service.createUser(req);

  return res.status(201).json({ user: userData });

};

const updateUser = async (req, res) => {

  const userData = await service.updateUser(req.params, req);

  res.status(200).json({ user: userData });

};

module.exports = {
  getUsers,
  createUser,
  updateUser,
};
