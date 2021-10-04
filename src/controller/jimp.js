var Jimp = require('jimp');
 
// open a file called "lenna.png"
Jimp.read('../../input_img/cat03.jpg', (err, lenna) => {
  if (err) throw err;
  lenna
    .rgba(true)
    .filterType(-1)
    .deflateLevel(5)
    .deflateStrategy(1)
    //.resize(256, 256) // resize
    .quality(10) // set JPEG quality
    //.greyscale() // set greyscale
    .write('new-cat.png'); // save
});