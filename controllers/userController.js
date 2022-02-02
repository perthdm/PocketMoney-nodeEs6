import UserModel from "../model/user.js";
import bcryptjs from "bcryptjs";

export const addUser = async (requestBody) => {
  try {
    const findUser = await UserModel.findOne({
      username: requestBody.username,
    });

    if (findUser) {
      return "username is already to use";
    } else {
      const salt = await bcryptjs.genSalt(10);
      const passwordHash = await bcryptjs.hash(requestBody.password, salt);

      const userData = new UserModel({
        username: requestBody.username,
        password: passwordHash,
        firstname: requestBody.firstname,
        lastname: requestBody.lastname,
        age: requestBody.age,
      });

      // console.log("MODEL ==> ", userData);

      await userData.save();
      return "CREATE USER SUCCESS";
    }
  } catch (err) {
    return err;
  }
};
