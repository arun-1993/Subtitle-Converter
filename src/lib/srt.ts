import { logError } from "./utils";

export function convertToSrt(inputData: string, inputFormat: string): string {
    switch (inputFormat.toLowerCase()) {
        case "vtt":
            return vttToSrt(inputData);

        default:
            logError("Could not convert the subtitle!");
            process.exit(1);
    }
}

function vttToSrt(inputData: string): string {
    const cueTimingFormat =
        /(\d{2,}:)?\d{2}:\d{2}\.\d{3} --> (\d{2,}:)?\d{2}:\d{2}\.\d{3}/;
    const dataArray = inputData.split(/\n{2,}/);
    const outputArray: string[] = [];

    if (dataArray[0] !== "WEBVTT") {
        logError("Invalid data in file!");
        process.exit(1);
    }

    let lineCount = 1;

    for (const cueBlock of dataArray.slice(1)) {
        const srtBlock = [lineCount.toString()];

        cueBlock.split("\n").forEach((cueLine) => {
            if (cueLine.match(cueTimingFormat)) {
                let [startTime, endTime] = cueLine
                    .replace(/\./g, ",")
                    .split(" --> ");

                if (startTime.match(/\d{2}:\d{2},\d{3}/))
                    startTime = "00:".concat(startTime);
                if (endTime.match(/\d{2}:\d{2},\d{3}/))
                    endTime = "00:".concat(endTime);

                srtBlock.push([startTime, endTime].join(" --> "));
            } else {
                srtBlock.push(cueLine);
            }
        });

        outputArray.push(srtBlock.join("\n"));
        ++lineCount;
    }

    return outputArray.join("\n\n");
}
