const express = require("express");

const connectDB = require("./db");
const shortUrlRoute = require("./routes/shorturl.route");
const getShortUrlRoute = require("./routes/getShortUrl.route");

const app = express();
connectDB();

app.use(express.json());

app.use("/v1/", getShortUrlRoute);
app.use("/v1/shorturl", shortUrlRoute);

const PORT = 8000;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));
