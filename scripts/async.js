const fs = require('fs');

/*
 * Using callbacks
 */
fs.readFile('./files/file1.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
  fs.readFile('./files/file2.txt', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data.toString());
  });
});

/*
 * Using promises
 */
const fsp = fs.promises;
fsp
    .readFile('./files/file1.txt')
    .then((data) => {
      console.log(data.toString());
    })
    .then(() => fsp.readFile('./files/file2.txt'))
    .then((data) => {
      console.log(data.toString());
    })
    .catch((err) => {
      console.log(err);
    });

/*
 * Using async/await
 */
// eslint-disable-next-line require-jsdoc
async function readfiles() {
  try {
    let data = await fsp.readFile('./files/file1.txt');
    console.log(data.toString());
    data = await fsp.readFile('./files/file2.txt');
    console.log(data.toString());
  } catch (err) {
    console.log(err);
  }
}

readfiles();
