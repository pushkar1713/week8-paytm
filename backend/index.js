const express = require("express");
const rootRouter = require("./routes/index");
const accountRouter = require("./routes/accounts");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const app = express();

app.use("/api/v1", rootRouter);
app.use("/api/vi/account", accountRouter);

app.listen(3000);
