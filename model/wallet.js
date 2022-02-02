import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  account: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    require: true,
    default: 0,
  },
  isUse: {
    type: Boolean,
    require: true,
    default: true,
  },
});

const Wallet = mongoose.model("Wallet", walletSchema, "Wallet");
export default Wallet;
