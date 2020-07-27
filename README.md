# vuemastery-dl
Vuemastery video downloader

* Open a lesson on the browser
* Run `document.getElementsByTagName('iframe')[0].src` in the browser's console to get {Video LINK}
* Run `node download.js {Video LINK}` in project directory. Also you can set quality of video `node download.js {Video LINK} 720`, Default set to 1080
* Run `node sitemap.js` to get list of courses

## Download an entire lesson
* first `cd data/ANY_DIRRECTORY` like `cd data/advanced-components`
* download a directory with `node ../../mirror.js`
