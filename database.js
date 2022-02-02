const dbName = "pocket";
const user = {
  name: "perthdm",
  pass: "D0817622582d_",
};

export const uri = `mongodb+srv://${user.name}:${user.password}@cluster0.tzccs.mongodb.net/${dbName}?retryWrites=true&w=majority`;
