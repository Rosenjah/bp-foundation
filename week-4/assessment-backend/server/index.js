const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');
const { getCookie } = require('./controller');
const { getPassword } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/cookie", getCookie);
app.get("/api/password", getPassword);

app.listen(4000, () => console.log("Server running on 4000"));
