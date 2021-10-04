const router = require("express").Router();
const { Events, User, OrgUser } = require("../models");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if(!userData) {
        return res.render('/login', { message: 'user not found' })
    };

    const isValid = await userData.checkPass(req.body.password);
    
    if (isValid) {
        req.session.save (() => {
        req.session.is_logged_in = true
        req.session.email = true,
        req.session.user = {
            username: userData.username,
            bio: userData.bio,
        };
    });
      console.log(userData);
    } else {
      console.log("try again");
      res.render("/login", { message: "please check your password" });
    }
  } catch (err) {
    console.log(err);
  }

  res.redirect("/login");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.post("/home"),
  async(req, res) => {
    try {
      const user = await User.create(req.body);
      res.redirect("/home");
    } catch (err) {
      console.log(err);
    }
  };

module.exports = router;
