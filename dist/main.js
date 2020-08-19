/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n//--------------------------------//\r\n//------------ TETRIS ------------//\r\n//--------------------------------//\r\n\r\n//---------------------------------------------------------\r\n\r\n/////////////\r\n// IMPORTS //\r\n/////////////\r\n\r\n\r\n\r\n//---------------------------------------------------------\r\n\r\n//////////////////\r\n// INIT SCRIPTS //\r\n//////////////////\r\n\r\n_modules_game__WEBPACK_IMPORTED_MODULE_0__[\"game\"].init();\r\n\r\n//---------------------------------------------------------\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/*! exports provided: init, configPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configPanel\", function() { return configPanel; });\nconst init = {\r\n  blockSize: 30,\r\n  rows: 18,\r\n  columns: 10,\r\n  speed: 500,\r\n  gameStatut: 'notStarted',\r\n  devMode: false,\r\n  deletionAnimationSpeed: 500,\r\n};\r\n\r\nconst configPanel = {\r\n  updateGameConfiguration() {\r\n    const newRowNumber = document.getElementById('rowNumber');\r\n    const newColumnNumber = document.getElementById('columnNumber');\r\n    const newBlockSize = document.getElementById('blockSize');\r\n    const newSpeed = document.getElementById('blockSpeed');\r\n    const dimUpdate =\r\n      init.rows === parseInt(newRowNumber.value, 10) &&\r\n      init.columns === parseInt(newColumnNumber.value, 10) &&\r\n      init.blockSize === parseInt(newBlockSize.value, 10);\r\n    init.rows = parseInt(newRowNumber.value, 10);\r\n    init.columns = parseInt(newColumnNumber.value, 10);\r\n    init.blockSize = parseInt(newBlockSize.value, 10);\r\n    init.speed = parseInt(newSpeed.value, 10) * 100;\r\n    return !dimUpdate;\r\n  },\r\n\r\n  displayInitialConfiguration() {\r\n    document.getElementById('rowNumber').value = init.rows;\r\n    document.getElementById('columnNumber').value = init.columns;\r\n    document.getElementById('blockSize').value = init.blockSize;\r\n    document.getElementById('blockSpeed').value = init.speed / 100;\r\n  },\r\n\r\n  enableDisplay(bool) {\r\n    document.getElementById('rowNumber').disabled = !bool;\r\n    document.getElementById('columnNumber').disabled = !bool;\r\n    document.getElementById('blockSize').disabled = !bool;\r\n    document.getElementById('blockSpeed').disabled = !bool;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/config.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/*! exports provided: display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"display\", function() { return display; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/modules/game.js\");\n\r\n\r\nconst display = {\r\n  endGame(bool) {\r\n    const displayValue = bool ? 'flex' : 'none';\r\n    document.getElementById('endGame').style.display = displayValue;\r\n    if (bool) {\r\n      document.getElementById('finalScore').innerHTML = _game__WEBPACK_IMPORTED_MODULE_0__[\"game\"].gameScore;\r\n    }\r\n  },\r\n\r\n  pause(bool) {\r\n    const displayValue = bool ? 'block' : 'none';\r\n    document.getElementById('gamePaused').style.display = displayValue;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"game\", function() { return game; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/modules/config.js\");\n/* harmony import */ var _tetrominoes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetrominoes */ \"./src/modules/tetrominoes.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playground */ \"./src/modules/playground.js\");\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputs */ \"./src/modules/inputs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst game = {\r\n  gameScore: 0,\r\n  timerId: 0,\r\n  init() {\r\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"configPanel\"].displayInitialConfiguration();\r\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"configPanel\"].enableDisplay(true);\r\n    _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].generatePlaygroundGrid();\r\n    _inputs__WEBPACK_IMPORTED_MODULE_4__[\"inputs\"].initListener();\r\n  },\r\n  start() {\r\n    if (_config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].gameStatut === 'lost') {\r\n      this.reset();\r\n    }\r\n    if (_config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].gameStatut === 'notStarted') {\r\n      console.log('new game is starting');\r\n      this.gameScore = 0;\r\n      this.updateScore(0);\r\n      _display__WEBPACK_IMPORTED_MODULE_2__[\"display\"].endGame(false);\r\n      _tetrominoes__WEBPACK_IMPORTED_MODULE_1__[\"tetromino\"].initTetromino();\r\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"configPanel\"].enableDisplay(false);\r\n      _tetrominoes__WEBPACK_IMPORTED_MODULE_1__[\"tetromino\"].draw();\r\n    }\r\n    if (_config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].gameStatut === 'pause' || _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].gameStatut === 'notStarted') {\r\n      this.timerId = setInterval(this.gameActive.bind(this), _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].speed);\r\n      document.getElementById('startButton').innerHTML = 'Pause Game';\r\n      _display__WEBPACK_IMPORTED_MODULE_2__[\"display\"].pause(false);\r\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].gameStatut = 'play';\r\n    } else {\r\n      console.log('game is pausing');\r\n      this.pause();\r\n    }\r\n  },\r\n  pause() {\r\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].gameStatut = 'pause';\r\n    _display__WEBPACK_IMPORTED_MODULE_2__[\"display\"].pause(true);\r\n    document.getElementById('startButton').innerHTML = 'Resume';\r\n    clearInterval(this.timerId);\r\n  },\r\n  reset() {\r\n    _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].cleanPlaygroundGrid();\r\n    _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].generatePlaygroundGrid();\r\n    _tetrominoes__WEBPACK_IMPORTED_MODULE_1__[\"tetromino\"].initTetromino();\r\n    clearInterval(this.timerId);\r\n    _display__WEBPACK_IMPORTED_MODULE_2__[\"display\"].pause(false);\r\n    _display__WEBPACK_IMPORTED_MODULE_2__[\"display\"].endGame(false);\r\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].gameStatut = 'notStarted';\r\n    _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].deletingAnimation = 'init';\r\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"configPanel\"].enableDisplay(true);\r\n    this.gameScore = 0;\r\n    this.updateScore(0);\r\n    document.getElementById('startButton').innerHTML = 'Start Game';\r\n    console.log('game have been reseted');\r\n  },\r\n  updateScore(lines) {\r\n    const addedScore = lines * lines * 10;\r\n    this.gameScore += addedScore;\r\n    document.getElementById('score').innerHTML = this.gameScore;\r\n  },\r\n  gameActive() {\r\n    if (_playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].deletingAnimation === 'onGoing') {\r\n      // animation onGoing, nothing will happen\r\n      return;\r\n    }\r\n    const lineToDelete = _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].lineIsMade();\r\n    const tetrominoTouchDown = _tetrominoes__WEBPACK_IMPORTED_MODULE_1__[\"tetromino\"].freeze();\r\n    if (tetrominoTouchDown && lineToDelete.length && _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].deletingAnimation !== 'done') {\r\n      console.log();\r\n      this.updateScore(lineToDelete.length);\r\n      _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].animateDeleteLine(lineToDelete);\r\n      _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].deletingAnimation = 'onGoing';\r\n      setTimeout(() => {\r\n        _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].deletingAnimation = 'done';\r\n      }, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].deletionAnimationSpeed);\r\n      return;\r\n    }\r\n    if (tetrominoTouchDown) {\r\n      _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].deleteLine(lineToDelete);\r\n      _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].deletingAnimation = 'init';\r\n      _tetrominoes__WEBPACK_IMPORTED_MODULE_1__[\"tetromino\"].drawNew();\r\n      const lose = this.loseCondition();\r\n      if (lose) {\r\n        clearInterval(this.timerId);\r\n        _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].gameStatut = 'lost';\r\n        document.getElementById('startButton').innerHTML = 'Restart';\r\n        console.log('GAME LOST');\r\n        _display__WEBPACK_IMPORTED_MODULE_2__[\"display\"].endGame(true);\r\n      }\r\n    } else {\r\n      _tetrominoes__WEBPACK_IMPORTED_MODULE_1__[\"tetromino\"].moveDown();\r\n    }\r\n  },\r\n  loseCondition() {\r\n    const gameLost = _tetrominoes__WEBPACK_IMPORTED_MODULE_1__[\"tetromino\"].current.some((index) => {\r\n      return _playground__WEBPACK_IMPORTED_MODULE_3__[\"playground\"].blocks[_tetrominoes__WEBPACK_IMPORTED_MODULE_1__[\"tetromino\"].position + index].classList.contains('taken');\r\n    });\r\n    return gameLost;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/inputs.js":
/*!*******************************!*\
  !*** ./src/modules/inputs.js ***!
  \*******************************/
/*! exports provided: inputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputs\", function() { return inputs; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/modules/game.js\");\n/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playground */ \"./src/modules/playground.js\");\n/* harmony import */ var _tetrominoes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetrominoes */ \"./src/modules/tetrominoes.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./src/modules/config.js\");\n\r\n\r\n\r\n\r\n\r\nconst inputs = {\r\n  handleKeyPress(e) {\r\n    if (_config__WEBPACK_IMPORTED_MODULE_3__[\"init\"].gameStatut === 'play') {\r\n      if (e.keyCode === 37) {\r\n        console.log('moving tetromino left');\r\n        _tetrominoes__WEBPACK_IMPORTED_MODULE_2__[\"tetromino\"].moveLeft();\r\n      }\r\n      if (e.keyCode === 39) {\r\n        console.log('moving tetromino right');\r\n        _tetrominoes__WEBPACK_IMPORTED_MODULE_2__[\"tetromino\"].moveRight();\r\n      }\r\n      if (e.keyCode === 40) {\r\n        console.log('moving tetromino down');\r\n        _tetrominoes__WEBPACK_IMPORTED_MODULE_2__[\"tetromino\"].pushDown();\r\n      }\r\n      if (e.keyCode === 65) {\r\n        console.log('rotating tetromino to the left');\r\n        _tetrominoes__WEBPACK_IMPORTED_MODULE_2__[\"tetromino\"].rotateTetromino('left');\r\n      }\r\n      if (e.keyCode === 90) {\r\n        console.log('rotating tetromino to the right');\r\n        _tetrominoes__WEBPACK_IMPORTED_MODULE_2__[\"tetromino\"].rotateTetromino('right');\r\n      }\r\n    }\r\n  },\r\n  initListener() {\r\n    document\r\n      .getElementById('configPanel')\r\n      .addEventListener('change', () => _playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].handleConfigUpdate());\r\n    document.getElementById('resetButton').addEventListener('click', () => _game__WEBPACK_IMPORTED_MODULE_0__[\"game\"].reset());\r\n    document.getElementById('startButton').addEventListener('click', () => _game__WEBPACK_IMPORTED_MODULE_0__[\"game\"].start());\r\n    document.addEventListener('keydown', this.handleKeyPress);\r\n  },\r\n  removeListener() {\r\n    document\r\n      .getElementById('configPanel')\r\n      .removeEventListener('change', () => _playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].handleConfigUpdate());\r\n    document.getElementById('resetButton').removeEventListener('click', () => _game__WEBPACK_IMPORTED_MODULE_0__[\"game\"].reset());\r\n    document.getElementById('startButton').removeEventListener('click', () => _game__WEBPACK_IMPORTED_MODULE_0__[\"game\"].start());\r\n    document.removeEventListener('keydown', this.handleKeyPress);\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/inputs.js?");

/***/ }),

/***/ "./src/modules/playground.js":
/*!***********************************!*\
  !*** ./src/modules/playground.js ***!
  \***********************************/
/*! exports provided: playground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playground\", function() { return playground; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/modules/config.js\");\n\r\n\r\nconst playground = {\r\n  blocks: [],\r\n  deletingAnimation: 'init',\r\n  generatePlaygroundGrid() {\r\n    console.log('generating playground blocks');\r\n    const playground = document.getElementById('playground');\r\n    const root = document.querySelector('html');\r\n    root.style.setProperty('--columns', _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns);\r\n    root.style.setProperty('--rows', _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].rows);\r\n    root.style.setProperty('--block-width', _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].blockSize + 'px');\r\n    const numberOfBlocks = _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].rows * _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns;\r\n    for (let i = 0; i < numberOfBlocks; i++) {\r\n      let div = document.createElement('div');\r\n      div.className = 'playgroundBlock';\r\n      _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].devMode ? (div.innerHTML = i) : null;\r\n      playground.appendChild(div);\r\n    }\r\n    for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns; i++) {\r\n      let div = document.createElement('div');\r\n      div.className = 'playgroundBottom taken';\r\n      playground.appendChild(div);\r\n    }\r\n    this.blocks = Array.from(document.querySelectorAll('.grid div'));\r\n    console.log(`${numberOfBlocks} blocks have been generated`);\r\n  },\r\n  cleanPlaygroundGrid() {\r\n    const playgroundToClean = document.getElementById('playground');\r\n    while (playgroundToClean.firstChild) {\r\n      playgroundToClean.removeChild(playgroundToClean.firstChild);\r\n    }\r\n  },\r\n  handleConfigUpdate() {\r\n    console.log('update configuration');\r\n    const haveRowsAndColumnsChanged = _config__WEBPACK_IMPORTED_MODULE_0__[\"configPanel\"].updateGameConfiguration();\r\n    console.log(haveRowsAndColumnsChanged);\r\n    if (haveRowsAndColumnsChanged) {\r\n      this.cleanPlaygroundGrid();\r\n      this.generatePlaygroundGrid();\r\n    }\r\n  },\r\n  lineIsMade() {\r\n    let checkLine = [];\r\n    let lineToDelete = [];\r\n    for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns; i++) {\r\n      checkLine.push(i);\r\n    }\r\n    for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].rows; i++) {\r\n      const lineTaken = checkLine.every((index) => {\r\n        return (\r\n          this.blocks[i * _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + index].classList.contains('taken') ||\r\n          this.blocks[i * _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + index].classList.contains('tetromino')\r\n        );\r\n      });\r\n      lineTaken ? lineToDelete.push(i) : null;\r\n    }\r\n    lineToDelete.length ? console.log('line complete', lineToDelete) : 0;\r\n    return lineToDelete;\r\n  },\r\n  animateDeleteLine(lineToDelete) {\r\n    for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns; i++) {\r\n      lineToDelete.forEach(\r\n        (index) =>\r\n          (this.blocks[_config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * index + i].className = 'playgroundBlock taken erasing')\r\n      );\r\n    }\r\n  },\r\n  deleteLine(lineArray) {\r\n    for (let j = 0; j < lineArray.length; j++) {\r\n      let saveUpperBlockStyle = [];\r\n      console.log(`deleting line ${lineArray[j]}`);\r\n      for (let i = 0; i < lineArray[j] * _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns; i++) {\r\n        saveUpperBlockStyle.push(this.blocks[i].className);\r\n        this.blocks[i].className = 'playgroundBlock';\r\n      }\r\n      for (let i = 0; i < lineArray[j] * _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns; i++) {\r\n        let bottomCheck = this.blocks[i + _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns].className;\r\n        !bottomCheck.includes('playgroundBottom')\r\n          ? (this.blocks[i + _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns].className = saveUpperBlockStyle[i])\r\n          : null;\r\n      }\r\n    }\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/playground.js?");

/***/ }),

/***/ "./src/modules/tetrominoes.js":
/*!************************************!*\
  !*** ./src/modules/tetrominoes.js ***!
  \************************************/
/*! exports provided: tetromino */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tetromino\", function() { return tetromino; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/modules/config.js\");\n/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playground */ \"./src/modules/playground.js\");\n\r\n\r\n\r\nconst tetromino = {\r\n  number: 0,\r\n  position: 0,\r\n  rotation: 0,\r\n  current: [],\r\n  theTetrominoes: [],\r\n  createTetrominoes() {\r\n    const iTetromino = [\r\n      [1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 3 + 1],\r\n      [0, 1, 2, 3],\r\n      [1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 3 + 1],\r\n      [0, 1, 2, 3],\r\n    ];\r\n    const llTetromino = [\r\n      [0, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n      [1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 1],\r\n      [0, 1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n      [1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 1],\r\n    ];\r\n    const lrTetromino = [\r\n      [2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n      [1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 2],\r\n      [0, 1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns],\r\n      [0, 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 1],\r\n    ];\r\n    const oTetromino = [\r\n      [1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n      [1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n      [1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n      [1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n    ];\r\n    const sTetromino = [\r\n      [1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1],\r\n      [1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 2],\r\n      [1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1],\r\n      [1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 2],\r\n    ];\r\n    const zTetromino = [\r\n      [0, 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n      [2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 1],\r\n      [0, 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n      [2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 1],\r\n    ];\r\n    const tTetromino = [\r\n      [1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2],\r\n      [1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 1],\r\n      [0, 1, 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1],\r\n      [2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 1, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns + 2, _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns * 2 + 2],\r\n    ];\r\n\r\n    return [iTetromino, llTetromino, lrTetromino, oTetromino, sTetromino, zTetromino, tTetromino];\r\n  },\r\n  initTetromino() {\r\n    console.log('init new tetromino');\r\n    _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].gameStatut === 'notStarted' ? (this.theTetrominoes = this.createTetrominoes()) : null;\r\n    this.position = Math.floor(_config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns / 2 - 1);\r\n    this.number = Math.floor(Math.random() * this.theTetrominoes.length);\r\n    console.log('tetromino number', this.number);\r\n    this.rotation = Math.floor(Math.random() * this.theTetrominoes[this.number].length);\r\n    this.current = this.theTetrominoes[this.number][this.rotation];\r\n  },\r\n  rotateTetromino(direction) {\r\n    let tempRotationIndex = this.rotation;\r\n    direction === 'right' ? tempRotationIndex++ : tempRotationIndex--;\r\n    tempRotationIndex >= this.theTetrominoes[this.number].length ? (tempRotationIndex = 0) : null;\r\n    tempRotationIndex < 0\r\n      ? (tempRotationIndex = this.theTetrominoes[this.number].length - 1)\r\n      : null;\r\n    // testing boudaries\r\n    const tempTetromino = this.theTetrominoes[this.number][tempRotationIndex];\r\n    const willTouchLimits = tempTetromino.some((index) => {\r\n      return _playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].blocks[this.position + index + _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns].classList.contains('taken');\r\n    });\r\n\r\n    const isAtRightEdge = tempTetromino.some((index) => {\r\n      return (index + this.position) % _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns === 0;\r\n    });\r\n\r\n    const isAtLeftEdge = tempTetromino.some((index) => {\r\n      return (index + this.position + 1) % _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns === 0;\r\n    });\r\n    if (willTouchLimits || (isAtRightEdge && isAtLeftEdge)) {\r\n      console.log('rotation not possible due to boudaries conflict');\r\n    } else {\r\n      this.undraw();\r\n      this.current = tempTetromino;\r\n      this.rotation = tempRotationIndex;\r\n      this.draw();\r\n    }\r\n  },\r\n  draw() {\r\n    this.current.forEach((index) => {\r\n      _playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].blocks[this.position + index].classList.add('tetromino');\r\n      _playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].blocks[this.position + index].classList.add('colorT' + this.number.toString());\r\n    });\r\n  },\r\n  drawNew() {\r\n    this.initTetromino();\r\n    this.draw();\r\n  },\r\n  undraw() {\r\n    this.current.forEach((index) => {\r\n      _playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].blocks[this.position + index].className = 'playgroundBlock';\r\n    });\r\n  },\r\n  moveDown() {\r\n    this.undraw();\r\n    this.position += _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns;\r\n    this.draw();\r\n  },\r\n  moveLeft() {\r\n    const isAtLeftEdge = this.current.some((index) => {\r\n      return (index + this.position) % _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns === 0;\r\n    });\r\n    if (!isAtLeftEdge && !this.lateralBlock('left')) {\r\n      this.undraw();\r\n      this.position--;\r\n      this.draw();\r\n    } else {\r\n      console.log('left boudary prevents tetromino movement');\r\n    }\r\n  },\r\n  pushDown() {\r\n    if (_playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].deletingAnimation !== 'init') {\r\n      return;\r\n    }\r\n    if (!this.freeze()) {\r\n      this.undraw();\r\n      this.position += _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns;\r\n      this.draw();\r\n    } else {\r\n      console.log('bottom boudary prevents tetromino movement');\r\n    }\r\n  },\r\n  moveRight() {\r\n    const isAtRightEdge = this.current.some((index) => {\r\n      return (index + this.position + 1) % _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns === 0;\r\n    });\r\n    if (!isAtRightEdge && !this.lateralBlock('right')) {\r\n      this.undraw();\r\n      this.position++;\r\n      this.draw();\r\n    } else {\r\n      console.log('right boudary prevents tetromino movement');\r\n    }\r\n  },\r\n  // when the current tetromino encouters a boundary it will freeze and become part of the boudaries.\r\n  freeze() {\r\n    const freezeCondition = this.current.some((index) =>\r\n      _playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].blocks[this.position + index + _config__WEBPACK_IMPORTED_MODULE_0__[\"init\"].columns].classList.contains('taken')\r\n    );\r\n    if (freezeCondition) {\r\n      console.log('TOUCH DOWN! new tetromino in the way');\r\n      this.current.forEach((index) => {\r\n        _playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].blocks[index + this.position].classList.add('taken');\r\n      });\r\n      return true;\r\n    }\r\n    return false;\r\n  },\r\n  lateralBlock(side) {\r\n    let checkSide;\r\n    side === 'right' ? (checkSide = 1) : (checkSide = -1);\r\n    return this.current.some((index) =>\r\n      _playground__WEBPACK_IMPORTED_MODULE_1__[\"playground\"].blocks[this.position + index + checkSide].classList.contains('taken')\r\n    );\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/tetrominoes.js?");

/***/ })

/******/ });