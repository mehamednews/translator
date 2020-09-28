const translator = require("./translator");

exports.translateStrToMultiLangs = async (req, res) => {
	try {
		const { str, languages, from } = req.body;
		const data = await translator.translateStrToMultiLangs({ str, languages, from });
		res.json(data);
	} catch (error) {
		console.log(error);
		res.status(400).end();
	}
};

exports.translateChunksToEnglish = async (req, res) => {
	try {
		const { strs } = req.body;
		const data = await translator.translateChunksToEnglish({ strs });
		res.json(data);
	} catch (error) {
		res.status(400).end();
	}
};
