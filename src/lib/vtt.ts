import { logError } from "./utils";

export function convertToVtt(inputData: string, inputFormat: string): string {
    switch (inputFormat.toLowerCase()) {
        case "srt":
            return srtToVtt(inputData);

        default:
            logError("Could not convert the subtitle!");
            process.exit(1);
    }
}

function srtToVtt(inputData: string): string {
    const dataArray = inputData.split(/\r\n\r\n|\r{2}|\n{2}/);
    const outputArray: string[] = ["WEBVTT"];
    const srtTimingFormat =
        /\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/;

    for (const srtBlock of dataArray) {
        const cueBlock: string[] = [];

        srtBlock.split("\n").forEach((line, i) => {
            if (i === 0) {
                return;
            } else if (line.match(srtTimingFormat)) {
                cueBlock.push(line.replace(/,/g, "."));
            } else {
                cueBlock.push(line);
            }
        });

        outputArray.push(cueBlock.join("\n"));
    }

    return outputArray.join("\n\n");
}
