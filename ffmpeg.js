const { exec } = require("child_process");
const path = require("path")
const fs = require("fs")

if (process.argv.length < 3) {
    console.log(`Usage: node ffmpeg.js {directory}`);
    return;
}

const directoryPath = path.join(__dirname, process.argv[2])

fs.readdir(directoryPath, function (e, files) {
    if (e) {
        console.log("Error! data directory maybe not exists")
        console.error(e)
    } else {
        files.forEach(function (file) {
            if (file.endsWith('.m4v')) {
                file = file.replace('.m4v','');
                exec('ffmpeg -i ' + directoryPath + `/${file}.m4v -i ` + directoryPath + `/${file}.m4a -acodec copy -vcodec copy ` + directoryPath + `/${file}.mp4`);
            }
        })
    }
});