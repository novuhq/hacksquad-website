/**
 * Returns a 6 digit hexCode prepended with '#' as a valid color code
 * @returns {string} hexCode
 */
export function generateRandomHexCode() {
	let hexCode = "#";

	for (let i = 0; i < 3; i++) {
		let component = Math.floor(Math.random() * 256).toString(16);
		// Make sure each component is 2 digits long
		if (component.length < 2) {
			component = "0" + component;
		}
		hexCode += component;
	}

	return hexCode;
}

// Sample Strings
for (let i = 0; i < 100; i++) {
	console.log(generateRandomHexCode());
}
