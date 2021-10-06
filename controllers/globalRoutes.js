const router = require("express").Router();
const User = require("../models/User.js");
const Events = require("../models/Events.js");
const OrgUser = require("../models/OrgUser.js");
const Contact = require("../models/Contact.js");

router.get("/", async (req, res) => {
  return res.render("home");
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

router.get("/user", (req, res) => {
  res.render("user");
});

router.post("/user"), async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.redirect("/user");
    } catch (err) {
      console.log(err);
    }
  };

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contact"), async (req, res) => {
    try {
      const user = await Contact.create(req.body);
      res.redirect("/contact");
    } catch (err) {
      console.log(err);
    }
  };

module.exports = router;
