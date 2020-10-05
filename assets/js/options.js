// select html
let copy = document.querySelector('#copyright');
// variables
let dateCopyright = new Date().getFullYear();
let copyright = `${dateCopyright} © DOligex V1.2`;
// input
copy.textContent = copyright;
