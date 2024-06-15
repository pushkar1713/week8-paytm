// backend/api/index.js
const express = require("express");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { authMiddleware } = require("../middleware");

const router = express.Router();

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post("/user/signup", async (req, res) => {
  const obj = signupBody.safeParse(req.body);
  if (!obj.success) {
    return res.status(411).json({
      msg: "incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      msg: "the email is already taken",
    });
  }

  const newUser = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  const userID = newUser._id;

  await Account.create({
    userId: userID,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId: userID,
    },
    JWT_SECRET
  );

  res.json({
    msg: "user created successfully",
    token: token,
  });
});

const udatedBody = zod.object({
  lastName: zod.string().optional(),
  password: zod.string().optional(),
  firstName: zod.string().optional(),
});

router.put("/user", authMiddleware, async (req, res) => {
  const { success } = udatedBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: "error while updating the information",
    });
  }
  await User.findOne({ _id: req.userId }, req.body);

  res.json({
    msg: "user information updated successfully",
  });
});

router.get("/user/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const user = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: user.map((user) => ({
      username: username.firstName,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
