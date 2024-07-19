import mongoose, { Schema } from "mongoose";

const sellusdtSchema = new Schema(
  {
    usdtVol: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    txref: {
      type: String,
      required: true,
    },
    accnum: {
      type: String,
      required: true,
    },
    accifsc: {
      type: String,
      required: true,
    },
    accname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Sellusdt =
  mongoose.model.Sellusdt || mongoose.model("SellUsdt", sellusdtSchema);

export default Sellusdt;
