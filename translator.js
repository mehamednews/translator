// const browser = require("./../browser");
const { default: translate, parseMultiple } = require("google-translate-open-api");
const Entities = require("html-entities").XmlEntities;
const decodeEntities = new Entities().decode;

class Translator {
	async translateStrToMultiLangs({ str, languages, from = "en" }) {
		const results = [];
		for (const l of languages) {
			const result = await translate(str, {
				tld: "com",
				from,
				to: l,
			});

			results.push({
				l,
				str: decodeEntities(result.data),
			});
		}

		return results;
	}

	async translateChunksToEnglish({ strs }) {
		let result = [];

		result = await translate(strs, {
			tld: "com",
			to: "en",
		});

		return parseMultiple(result.data[0]).map((el) => decodeEntities(el));
	}
}

module.exports = new Translator();
