// select html
let copy = document.querySelector("#copyright");
// variables
let dateCopyright = new Date().getFullYear();
let copyright = `${dateCopyright} © DOligex V1.2.2`;
// input
copy.textContent = copyright;

// dark-mode don't work getElementsById is not a fnction

// let app = {

//     init: function () {
//         app.changeMode();
//     },

//     changeMode: function() {
//         const btn = document.getElementsById('btn');
//         btn.addEventListener('change', () => {
//             app.darkMode();
//         });
//     },

//     darkMode: function() {
//         const logo = document.getElementById('logo');
//         const body = document.getElementById('body');

//         body.classList.toggle('dark');
//         logo.classList.toggle('dark');
//     }
// };

// document.addEventListener('DOMContentLoaded', app.init);
