// @ts-ignore
import twitterGetUrl from "twitter-url-direct";
import https from "https";
import fs from "fs";

const downloadVideo = (url: string, fileName: string) => {
  https.get(url, (response) => {
    response.pipe(fs.createWriteStream(fileName));
  });
};

const args = process.argv.slice(2);
const url = args[0];
const fileName = args[1];

(async () => {
  const response = await twitterGetUrl(url);
  const videoUrl = response.download.pop().url;
  downloadVideo(videoUrl, fileName);
  console.log(`Downloaded video from ${videoUrl} to ${fileName}`);
})();
