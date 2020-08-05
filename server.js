const express = require("express");
const app = express();
const cont = require("./controller");

app.use(express.json());

app.post("/normal", cont.translateStrToMultiLangs);
app.post("/chunks", cont.translateChunksToEnglish);

const port = process.env.PORT || 1000;
app.listen(port, () => {
	console.log(`started on ${port}`);
});
