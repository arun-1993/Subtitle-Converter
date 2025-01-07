# Subtitle Format Converter

A simple tool to convert subtitles from one format to another.
Currently has support for vtt and srt formats.

To convert a subtitle, first install the package globally on your system by using the command :

```bash
npm i -g @arun-1993/subtitle-converter
```

Or by cloning the repository :

```bash
git clone https://github.com/arun-1993/Subtitle-Converter.git
cd Subtitle-Converter
npm i
npm run build
npm i -g
```

Once installed, you can use the following command to convert a subtitle :

```bash
convertsubtitle sourcefile destinationfile
```

If the destination file is not provided, the source file name will be used with the `srt` extension as the destination file regardless of the source file's extension.
