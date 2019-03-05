const images = require('images');
var fs = require("fs");
var path = "images";

function explorer(path) {
  fs.readdir(path, function (err, files) {
    if (err) {
      console.log("error:\n" + err);
      return;
    }
    files.forEach(function (file) {
      fs.stat(path + '/' + file, function (err, stat) {
        console.log(stat.isFile());
        if (err) {
          console.log('line14' + err);
          return;
        }
        if (!stat.isFile()) {
          explorer(path + '/' + file);
        } else {
          var fileName = path + '/' + file;
          var outName = 'dist' + '/' + 'another' + file;
          images(fileName)
            .save(outName, {
              quality : 80
            })
        }
      })
    })
  })
}
explorer(path);