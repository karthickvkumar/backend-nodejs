const loginToAccount = ((req, res) => {
  res.status(200).json("Logged In");
})

const createNewAccount = ((req, res) => {
  res.status(200).json('New Account Created');
})

const logoutAccount = ((req, res) => {
  res.status(200).json('Product deleted')
})

module.exports = {
  loginToAccount,
  createNewAccount,
  logoutAccount
}