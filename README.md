# Twitter Video Downloader

This is a command-line script that downloads the video from a Twitter URL and saves it to a local file.

## Installation

To use this script, you need to have Node.js and npm installed on your computer. You can download them from the [official Node.js website](https://nodejs.org/).

Once you have Node.js and npm installed, you can install the dependencies for this script by running the following command in the terminal:

```
npm install
```

## Usage

To download a Twitter video, run the following command in the terminal:

```
npm start -- <twitter_url> <file_name>
```
Replace `<twitter_url>` with the URL of the Twitter video that you want to download, and `<file_name>` with the name of the local file where you want to save the video.

The script will download the video and save it to the specified file in the current directory.

## Credits

This script uses the [twitter-url-direct](https://www.npmjs.com/package/twitter-url-direct) package to extract the direct download link for the Twitter video, and the built-in `https` and `fs` modules to download and save the video file.

## License

This project is licensed under the [MIT license](LICENSE).

