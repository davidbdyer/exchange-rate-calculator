import { readFile, writeFile } from 'fs';

const index = readFile('./index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const updated = data.replace('script-min.js', 'script.js');
  writeFile('./index.html', updated, err => {
    if (err) {
      console.error(err);
    }
  });
});