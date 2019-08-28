function regex() {
    const REPLACEMENT = 'ABCD';
    const ORIGINAL = "In the beginning God created the heavens and the earth.";

    let regexString = "";
    while (true) {
        regexString = prompt("Specify a regex, that will search in the string '" +
                ORIGINAL + "' and replace a match with '" + REPLACEMENT + "'", regexString);
        if (regexString === null) {
            return;
        }
        const regexParts = regexString.split("/");
        const regex = new RegExp(regexParts[1], regexParts[2]);

        const result = ORIGINAL.replace(regex, REPLACEMENT);

        alert(result);
    }
}
