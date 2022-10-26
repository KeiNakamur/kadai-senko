//Userスキーマ
const mongoose = require("mongoose");

//https://mongoosejs.com/docs/guide.html参照
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 5,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 50,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 100,
    },
    city: {
      type: String,
      max: 50,
    },
  },

  //データを格納した時間と日付を自動的に格納してくれる
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
