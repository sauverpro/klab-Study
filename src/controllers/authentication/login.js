import { userModel } from "../../models";
import { generateToken, comparePassword } from "../../utils";
export const login = async (req, res) => {
  try {
   
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
    }
    let comparedPassword = await comparePassword(req.body.password, user.password)
    if (!comparedPassword) {
      res.status(401).json({
        message: "wrong password",
      });
    }
   let token = generateToken({
    _id : user._id,
    fullname: user.fullname,
    email: user.email
   })
    res.status(200).json({
         message: "Login Successfully",
     access_token : token,
     data:{
        fullname:user.fullname,
        email: user.email
     },
    });

  } catch (error) {
    console.log(error);
  }
};
