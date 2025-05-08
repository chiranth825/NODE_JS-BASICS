import url from 'url';
const urlString = 'https://www.google.com/search?q=hello+world';

//URL object

const urlObj = new URL(urlString);

console.log(urlObj)

//format()
console.log(import.meta.url);

//fileURLPath()

console.log(url.fileURLToPath(import.meta.url));
console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));
params.append('limit', '5');
params.delete('limit');
console.log(params);
