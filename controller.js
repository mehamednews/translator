const translator = require("./translator");

exports.translateStrToMultiLangs = async (req, res) => {
	const { str, languages, from } = req.body;

	const data = await translator.translateStrToMultiLangs({ str, languages, from });
	res.json(data);
};

exports.translateChunksToEnglish = async (req, res) => {
	const { strs } = req.body;

	const data = await translator.translateChunksToEnglish({ strs });
	res.json(data);
};
