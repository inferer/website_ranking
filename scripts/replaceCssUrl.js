const fs = require("fs");
const path = require("path");

function replaceCssUrl() {
  const fileDisplay = (filePath) => {
    //根据文件路径读取文件，返回文件列表
      fs.readdir(filePath, function (err, files) {
        if (err) return console.error("Error:(spec)", err);
        files.forEach((filename) => {
          //获取当前文件的绝对路径
          const filedir = path.join(filePath, filename);
          // fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
          fs.stat(filedir, (eror, stats) => {
            if (eror) return console.error("Error:(spec)", err);
            // 是否是文件
            const isFile = stats.isFile();
            // 是否是文件夹
            const isDir = stats.isDirectory();
            if (isFile) {
              if (filedir.indexOf('DS_Store') <= 0) {
                // arr.push(filedir)
                const cssFile = path.resolve(__dirname, '..', filedir);
                const cssStr = fs.readFileSync(cssFile);
                const replaeCssStr = cssStr.toString().replace(/url\(\'\//gi, "url('https://website-1315068501.cos.ap-nanjing.myqcloud.com/website_ranking/")
                fs.writeFileSync(cssFile, replaeCssStr, 'utf-8')
              }
            }
            // 如果是文件夹
            if (isDir) fileDisplay(filedir);
          });
        });
    });
  };

  fileDisplay('src/styles')
}

module.exports = replaceCssUrl