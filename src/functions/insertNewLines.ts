/**
 *
 * @param {string} string The string to have lines new inserted into
 * @param {number} insertEvery How many characters inbetween each line break
 * @param {string} wordBreak What to do when a line break goes through a word.
 * @param {string} hyphenCharacter If the parameter "wordBreak" is set to the option "hyphenate", what character should be inserted instead of a hyphen. Defaults to "-"
 */
export function insertNewLines(
	string: string,
	insertEvery: number,
	wordBreak: "hyphenate" | "none" | "moveToBegin" | "moveToEnd" = "none",
	hyphenCharacter: string = "-"
) {
	if (typeof string !== "string") {
		throw new TypeError("String parameter must be a string");
	}
	if (typeof insertEvery !== "number") {
		throw new TypeError("InsertEvery parameter must be a number");
	}
	if (
		!["hyphenate", "none", "moveToBegin", "moveToEnd"].some(
			(v) => v == wordBreak
		)
	) {
		throw new TypeError("Invalid WordBreak option");
	}
	if (typeof hyphenCharacter !== "string") {
		throw new TypeError("HyphenCharacter parameter must be a string");
	}
	if (!string) {
		throw new ReferenceError("String parameter is missing");
	}
	if (!insertEvery) {
		throw new ReferenceError("InsertEvery parameter is missing");
	}
	if (insertEvery <= 0) {
		throw new TypeError("InsertEver parameter must be greater than 0");
	}
	if (!Number.isInteger(insertEvery)) {
		throw new TypeError("InsertEver parameter must be an integer");
	}
	if (wordBreak == "hyphenate") {
		let result = "";
		let currentIndex = 0;
		while (currentIndex < string.length) {
			const nextChunk = string.substring(
				currentIndex,
				currentIndex + insertEvery
			);
			const nextLetter = string[currentIndex + nextChunk.trim().length];
			result += nextChunk.trim();
			if (currentIndex + insertEvery < string.length) {
				if (nextLetter === " ") result += "\n";
				else result += `${hyphenCharacter}\n`;
			}
			currentIndex += insertEvery;
		}
		return result;
	} else if (wordBreak == "moveToBegin") {
		let result = "";
		let currentIndex = 0;
		while (currentIndex < string.length) {
			let nextChunk = string.substring(
				currentIndex,
				currentIndex + insertEvery
			);
			let lastLetter = nextChunk[nextChunk.length - 1];
			while (lastLetter !== " " && lastLetter) {
				nextChunk = nextChunk.substring(0, nextChunk.length - 1);
				lastLetter = nextChunk[nextChunk.length - 1];
			}
			if (nextChunk === "") {
				// If nextChunk is empty, it means that there were no spaces within the chunk
				nextChunk = string.substring(currentIndex, currentIndex + insertEvery);
			}
			result += nextChunk.trim();
			if (currentIndex + insertEvery < string.length) {
				result += "\n";
			}
			currentIndex += nextChunk.length;
		}
		return result;
	} else if (wordBreak == "moveToEnd") {
		let result = "";
		let currentIndex = 0;
		let lengthAdded = 0;
		while (currentIndex < string.length) {
			let nextChunk = string.substring(
				currentIndex,
				currentIndex + insertEvery
			);
			let nextLetter = string[currentIndex + nextChunk.length];
			lengthAdded = 0;
			while (nextLetter !== " " && nextLetter) {
				lengthAdded++;
				nextChunk = string.substring(
					currentIndex,
					currentIndex + insertEvery + lengthAdded
				);
				nextLetter = string[currentIndex + nextChunk.length];
			}
			result += nextChunk.trim();
			if (currentIndex + insertEvery < string.length) {
				result += "\n";
			}
			currentIndex += insertEvery + lengthAdded;
		}
		return result;
	} else if (wordBreak == "none") {
		let result = "";
		let currentIndex = 0;
		while (currentIndex < string.length) {
			const nextChunk = string.substring(
				currentIndex,
				currentIndex + insertEvery
			);
			result += nextChunk.trim();
			if (currentIndex + insertEvery < string.length) {
				result += "\n";
			}
			currentIndex += insertEvery;
		}
		return result;
	}
}
