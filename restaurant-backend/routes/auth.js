const router = require("express").Router();
const User = require("../models/User");

// router.get("/", (req, res) => {
//   res.send("auth router");
// });

//ユーザー登録
router.post("/register", async (req, res) => {
  try {
    const newUser = await new User({
      //usernameというデータをリクエストのbody(内容)の中のusernameから探し出して格納
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    //mongooseの公式ドキュメント参照。.saveでsaveする必要があり
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//ログイン機能
router.post("/login", async (req, res) => {
  try {
    //findOne(mongoose内の関数)を利用して登録したユーザー情報を探す(email)で探す
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("ユーザーが見つかりません");

    //req.body.password==ユーザーがログイン時に入力したパスワード
    //user.password==ユーザーが登録時に入力したパスワード
    const vailedPassword = req.body.password === user.password;
    if (!vailedPassword) return res.status(400).json("パスワードが違います");
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
