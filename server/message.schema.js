import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  username: String,
  room: String,
  message: String,
  __createdtime__: Number,
});

const messageModel = mongoose.model("chats", messageSchema);

export default messageModel;
