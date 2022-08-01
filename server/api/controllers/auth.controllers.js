const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { createTokenUser, createJWT } = require("../utils");

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
    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Por favor ingrese email y password");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("No se encontro un usuario con estos datos");
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new Error("Datos de acceso invalidos");
    }

    const tokenUser = createTokenUser(user);
    const token = createJWT({ payload: tokenUser });
    res.status(StatusCodes.OK).json({ user: tokenUser, token });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };
