import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { convertToSrt } from "./srt.js";
import { getFormat, isFormatSupported, logError } from "./utils.js";

const args = process.argv.slice(2);

const inputFile = args[0];
const inputFormat = getFormat(inputFile);

if (inputFormat === undefined || !isFormatSupported(inputFormat)) {
    logError("Invalid input file format!");
    process.exit(1);
}

const outputFile =
    args[1] ?? args[0].split(".").slice(0, -1).concat("srt").join(".");
const outputFormat = getFormat(outputFile);

if (outputFormat === undefined || !isFormatSupported(outputFormat)) {
    logError("Invalid output file format!");
    process.exit(1);
}

if (existsSync(outputFile)) {
    logError(`File ${outputFile} already exists!`);
    process.exit(1);
}

const inputData = readFileSync(inputFile, "utf-8");
let outputData: string;

switch (outputFormat.toLowerCase()) {
    case "srt":
        outputData = convertToSrt(inputData, inputFormat);
        break;

    default:
        logError("Could not convert the subtitle!");
        process.exit(1);
}

try {
    writeFileSync(outputFile, outputData);
    console.log(`File successfully converted!`);
} catch (err) {
    logError((err as Error).message);
    process.exit(1);
}

process.exit(0);
