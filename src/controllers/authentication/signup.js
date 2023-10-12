import { userModel } from "../../models";
import { generateToken, hashPassword } from "../../utils";
export const siginUp = async (req, res) => {
  try {
    let checkUser = await userModel.findOne({ email: req.body.email });
    if (checkUser) {
      res.status(409).json({ message: "email already exist" });
    }
    let hash = await hashPassword(req.body.password);
    req.body.password = hash;
    let newUser = await userModel.create(req.body);
    console.log("new User", newUser);
    let token = generateToken({
      _id: newUser._id,
      email: newUser.email,
    });

    res.status(200).json({
      message: "User registered successfully",
      access_token: token,
      data: {
        email: newUser.email,
        fullName: newUser.fullName,
        location: newUser.location,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
