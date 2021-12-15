const fs = require('fs');
// contoh promise untuk async
const promiseAsync = new Promise((resolve, reject) => {
  fs.readFile('A.txt', 'utf8', (err, res) => {
    if (err) reject(err);
    resolve(res);
  });
});
promiseAsync
  .then(res => console.log('hasil async: ', res))
  .catch(err => console.log('error', err));
// contoh promise untuk sync
const promiseSync = new Promise(resolve => {
  resolve('hasil');
});
promiseSync
  .then(res => console.log('hasil sync: ', res));