# vuemastery-dl
vuemastery dowloader

* Open a lesson on browser
* Run this code on browser console `document.getElementsByTagName('iframe')[0].src` to get {Video LINK}
* Run `node download.js {Video LINK}` in project directory. Also you can set quality of video `node download.js {Video LINK} 720`, Default set to 1080
* Run `node sitemap.js` to get list of courses

## Group Download
* first `cd data/ANY_DIRRECTORY` like `cd data/advanced-components`
* download a directory with `node ../../mirror.js`

#### Bypass firebase in progress!
