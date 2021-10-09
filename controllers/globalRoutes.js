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

    if (!userData) {
      return res.render("/login", { message: "user not found" });
    }

    const isValid = await userData.checkPass(req.body.password);

    if (isValid) {
      req.session.save(() => {
        req.session.is_logged_in = true;
        (req.session.email = true),
          (req.session.user = {
            username: userData.username,
          });
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

router.post("/home",
  async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.redirect("/home");
    } catch (err) {
      console.log(err);
    }
  });

router.get("/user", (req, res) => {
  res.render("user");
});

router.post("/api/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      
      res.redirect('/api/users');
    });
  } catch (err) {
    console.log(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPass(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.redirect('/api/users');
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contact", async (req, res) => {
  try {
    const user = await Contact.create(req.body);
    res.render("contact");
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", (req, res) => {
  res.render("logout");
});

module.exports = router;
