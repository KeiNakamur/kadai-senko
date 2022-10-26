const User = require("../models/User");
const router = require("express").Router();

//CRUD操作↓
//ユーザー情報の更新
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      //findByIdAndUpdateがmongoose上で用意されているのでそちらを利用
      const user = await User.findByIdAndUpdate(req.params.id, {
        //$set == 全てのパラメータ
        $set: req.body, //全てのパラメータをpostmanで打ち込むbodyの要素に更新する
      });
      res.status(200).json("ユーザー情報が更新されました");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("更新する権限がありません");
  }
});

//ユーザー情報の削除
router.delete("/:id", async (req, res) => {
  if (req.body.userId == req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("削除しました");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("削除する権限がありません");
  }
});
//ユーザー情報の取得
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    //分割代入
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// router.get("/", (req, res) => {
//   res.send("user Router");
// });

module.exports = router;
