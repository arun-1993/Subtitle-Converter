# Subtitle Format Converter

A simple command-line tool to convert subtitle files between different formats. Currently, it supports converting between **.vtt** (WebVTT) and **.srt** (SubRip Subtitle) formats.

## Installation

Install the Subtitle Format Converter globally using npm:

```bash
npm i -g @arun-1993/subtitle-converter
```

Alternatively, you can clone the repository and build it locally:

```bash
git clone https://github.com/arun-1993/Subtitle-Converter.git
cd Subtitle-Converter
npm i
npm run build
npm i -g
```

## Usage

Once installed, you can use the `convertsubtitle` command to convert subtitles:

```bash
convertsubtitle sourcefile destinationfile
```

- **sourcefile**: The input subtitle file.
- **destinationfile**: The output subtitle file.

If you do not specify a destination file, the tool will automatically determine the destination filename based on the source file’s extension:

- If the source is `.srt`, the output will be `.vtt`.
- If the source is `.vtt` or any other file type, the output will be `.srt`.

### Example

Convert a `.srt` file to `.vtt`:

```bash
convertsubtitle example1.srt example2.vtt
```

Convert a `.vtt` file to `.srt` (without specifying a destination file):

```bash
convertsubtitle example.vtt
```

This will create `example.srt` in the same directory.

## License

This project is licensed under the ISC License - see the [LICENSE](./LICENSE.txt) file for details.

## Contributing

Contributions are welcome! Please fork this repository, create a branch, and submit a pull request.

---

For more information or to report issues, visit the [GitHub repository](https://github.com/arun-1993/Subtitle-Converter).
