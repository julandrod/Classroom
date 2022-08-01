const User = require("../models/User");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

const registerUser = async (req, res) => {
  try {
    const { email } = req.body;
    const emailAlreadyExists = await User.findOne({ email });

    if (emailAlreadyExists) {
      throw new Error("Este email ya esta registrado");
    }
    // Primer usuario registrado obtiene el rol de admin
    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? "admin" : "alumno";

    const user = await User.create({ ...req.body, role });
    // agregar JWT
    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Datos erroneos");

    const validation = await bcrypt.compare(req.body.password, user.password);
    !validation && res.status(400).json("Datos erroneos");

    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser };
