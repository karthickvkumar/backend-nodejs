const getAllUsers = ((req, res) => {
  res.status(200).json("Success");
});

const updateUser = ((req, res) => {
  res.status(200).json('Success');
});

module.exports = {
  getAllUsers,
  updateUser
}