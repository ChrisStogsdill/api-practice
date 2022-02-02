/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const testImg = document.getElementById('update-image');\nconst searchInput = document.getElementById('search-text');\nconst updateButton = document.getElementById('update-button');\n\n// create function for the update button\n\nfunction updateGif(searchTerm) {\n  // put search term in the fetch url\n  const searchUrl = `https://api.giphy.com/v1/gifs/translate?api_key=iBwgR73ftQriwkNWYpchMJu2xCFI2sog&s=${searchTerm}`;\n\n  fetch(searchUrl, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((response) => {\n      //console.log(response.data.images.original.url);\n      testImg.src = response.data.images.original.url;\n    })\n    .catch((err) => { alert(err); });\n}\n\n// add event listener for update button\nupdateButton.addEventListener('click', () => {\n  updateGif(searchInput.value);\n});\n\n// add event listener for Enter Press as well\nsearchInput.addEventListener('keydown', (keyPress) => {\n  if (keyPress.key === 'Enter') {\n    updateGif(searchInput.value);\n  }\n});\n\n\n//# sourceURL=webpack://api-practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;