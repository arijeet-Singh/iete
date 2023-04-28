const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newAdmin = new Admin({
      email: req.body.email,
      password: hashedPassword,
    });
    const user = newAdmin.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/adminaccess/:id", async(req, res)=>{
  try{
    const admin = await Admin.findOne({ _id: req.params.id });
    res.status(200).json(admin);
  }
  catch(e){
    return res.status(500).json(e);
  }
})

// router.post("/login", async (req, res) => {
// try {
//   if (!req.body.email.includes("@gmail.com")) {
//     res.status(406).json("Wrong Email ID");
//   } else {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       res.status(406).json("User Not Found");
//     } else {
//       const validPassword = await bcrypt.compare(
//         req.body.password,
//         user.password
//       );
//       if (validPassword) {
//         res.status(200).json(user);
//       } else {
//         res.status(404).json("Wrong Password");
//       }
//     }
//   }
// } catch (err) {
//   res.status(500).json(err);
// }
// });

module.exports = router;
