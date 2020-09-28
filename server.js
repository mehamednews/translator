const express = require("express");
const bodyParser = require("body-parser");
const cont = require("./controller");

const app = express();
app.use(bodyParser.json());

app.post("/normal", cont.translateStrToMultiLangs);
app.post("/chunks", cont.translateChunksToEnglish);

const port = process.env.PORT || 1000;
app.listen(port, () => {
	console.log(`started on ${port}`);
});
