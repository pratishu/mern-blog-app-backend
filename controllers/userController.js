const adduser = (req, res) => {
  res.status(200).json({ msg: "user has been created" });
};

const removeuser = (req, res) => {
  res.status(200).json({ msg: "user deleted" });
};

const updateuser = (req, res) => {
  res.status(200).json({ msg: "user has been updated" });
};

const getalluser = (req, res) => {
  res.status(200).json({ msg: "user has been send to you" });
};

const getsingleuser = (req, res) => {
  res.status(200).json({ msg: "single user" });
};

module.exports = {
  adduser,
  updateuser,
  removeuser,
  getalluser,
  getsingleuser,
};
