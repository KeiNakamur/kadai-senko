const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

//データベース接続
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DBと接続中...");
  })
  .catch(() => {
    console.log("エラー");
  });

//ミドルウェアの設定
app.use(express.json()); //ユーザー情報をjson形式で扱うためexpress.json()と指定
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("server is running");
});