import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// ========= Model =========
import WalletModel from "./model/wallet.js";

// ========= CTL =========
import * as UserController from "./controllers/userController.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = `mongodb+srv://admin:MitmtYbFVfRWpKMs@pocket-money.tzccs.mongodb.net/pocketm?retryWrites=true&w=majority`;
const PORT = 3000;

try {
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () =>
      console.log(" -Mongoose is connected \n" + uri)
  );
} catch (e) {
  console.log("could not connect");
}

app.post("/pocket/add", async (req, res) => {
  console.log("CTL WALLET");
  // walletSchema
  // + account
  // + bankName
  // + value
  // + inUse
});

app.post("/user/add", async (req, res) => {
  let response = await UserController.addUser(req.body);
  res.send(response);
});

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running at : ${PORT}`);
});
