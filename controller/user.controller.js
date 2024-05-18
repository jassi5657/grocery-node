const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

// for getting seller login

function getLoginSeller(req, res) {
  res.render("sellerLogin.ejs", { error: "" });
}

// for logging user 



async function postLoginSeller(req, res) {
  const { email, password } = req.body;

  const isUser = await User.findOne({ email: email, role: "seller" });

  if (!isUser) {
    return res.render("sellerLogin.ejs", { error: "User not Found" });
  }

  if (await bcrypt.compare(password, isUser.password)) {
    const token = jwt.sign(
      {
        name: isUser.name,
        email: isUser.email,
        _id: isUser._id,
        role: isUser.role,
      },
      process.env.JWT_SECRET
    );
    res.cookie("token", token);
    res.redirect("/seller/dashboard");
  }

  res.render("sellerLogin", { error: "Invalid Password" });
}

function getSignupSeller(req, res) {
  res.render("signupSeller.ejs", { error: "" });
}


// for adding seller to db


async function postSignupSeller(req , res) {
  const { username, email, password, phone } = req.body;

  const checkingUser = await User.findOne({ email: email, role: "seller" });

  if (checkingUser) {
    return res.render("signupSeller.ejs", { error: "Seller Already exist" });
  }

  const saltround = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, saltround);
  const user = await User.create({
    username,
    email,
    phone,
    password: hashed,
    role: "seller",
  });

  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
      id: user._id,
      role: "seller",
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);
  return res.redirect("/");
}

// user 

// for getting user login

function getLogin(req, res) {
  res.render("login.ejs", { message: "" });
}

// for getting  signup page of user


function getSignup(req, res) {
  if (req.cookies.token) {
    return res.redirect("/");
  }
  res.render("signup.ejs", { error: "" });
}

// for adding  user to db


async function signUp(req, res) {
  const { username, email, password, phone } = req.body;

  let checkingUser = await User.findOne({ email: email, role: "user" });

  if (checkingUser) {
    return res.render("signup.ejs", { error: "User Already exist" });
  }

  const saltround = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, saltround);
  const user = await User.create({
    username,
    email,
    phone,
    password: hashed,
  });

  const token = jwt.sign(
    { username: user.username, email: user.email, id: user._id, role: "user" },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);
  return res.redirect("/");
}


// for logging user in

async function postLogin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.render("login.ejs", { message: "Email does'nt exsist" });
  }

  let checkingPassword = await bcrypt.compare(password, user.password);
  if (!checkingPassword) {
    return res.render("login.ejs", { message: "Invalid Password" });
  }

  // res.setCookies("user" , "nitin")

  const token = jwt.sign(
    { username: user.username, email: user.email, id: user._id },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);
  res.redirect("/");
}

function getMyAccount(req, res) {
  res.render("myaccount");
}


// for logout user

function logout(req, res) {
  res.cookie("token", "");
  return res.redirect("/");
}

module.exports = {
  signUp,
  getSignup,
  postLogin,
  postLoginSeller,
  getLogin,
  logout,
  getMyAccount,
  getLoginSeller,
  postSignupSeller ,
  getSignupSeller
};
