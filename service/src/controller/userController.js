const userModel = require("../model/userModel");
class User {
  //createUser
  static createUser = async (req, res, next) => {
    try {
     const invoicedata =  Math.floor(100000000 + Math.random() * 900000000);
      const user = await new userModel({ "invoice": invoicedata, name :"gaurav", email: "gaurav13669@gmail.com" });
    await user.save();
    res.status(201).json({
      message: "User created successfully",
    });
    } catch (error) {
      console.log("Error creating user")
    }
  };
}
module.exports = User;
