require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes");

const PORT = 3001;
const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);

app.use(express.static("../frontend/dist"));

app.use(cookieParser());
app.use(express.json());

app.use("/", routes);

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => {
	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`);
	});
});
