import { styleText } from "node:util";

export function getFormat(filename: string): string {
    const [_, extension] = filename.split(".");
    return extension;
}

export function isFormatSupported(format: string): boolean {
    const supportedFormatList = ["srt", "vtt"];

    return supportedFormatList.some(
        (supportedFormat) => supportedFormat.localeCompare(format) === 0
    );
}

export function logError(message: string): void {
    console.log(styleText(["red", "bgWhiteBright"], `Error: ${message}`));
}
