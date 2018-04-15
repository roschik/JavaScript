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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bundle/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle/script.js":
/*!**************************!*\
  !*** ./bundle/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function() {\r\n\r\n\tlet scroll = __webpack_require__(/*! ../parts/scroll.js */ \"./parts/scroll.js\");\r\n\tlet tab = __webpack_require__(/*! ../parts/tab.js */ \"./parts/tab.js\");\r\n\tlet modal = __webpack_require__(/*! ../parts/modal.js */ \"./parts/modal.js\");\r\n\tlet formAjax = __webpack_require__(/*! ../parts/formAjax.js */ \"./parts/formAjax.js\");\r\n\tlet slider = __webpack_require__(/*! ../parts/slider.js */ \"./parts/slider.js\");\r\n\tlet calc = __webpack_require__(/*! ../parts/calc.js */ \"./parts/calc.js\");\r\n\tlet timer = __webpack_require__(/*! ../parts/timer.js */ \"./parts/timer.js\");\r\n\r\n\tscroll();\r\n\ttab();\r\n\tmodal();\r\n\tformAjax();\r\n\tslider();\r\n\tcalc();\r\n\ttimer();\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./bundle/script.js?");

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\r\n\t// Calc\r\n\r\n\tlet persons = document.getElementsByClassName('counter-block-input')[0],\r\n\t\t\trestDays = document.getElementsByClassName('counter-block-input')[1],\r\n\t\t\tplace = document.getElementById('select'),\r\n\t\t\ttotalValue = document.getElementById('total'),\r\n\t\t\tpersonsSum = 0,\r\n\t\t\tdaysSum = 0,\r\n\t\t\ttotal = 0;\r\n\r\n\ttotalValue.innerHTML = 0;\r\n\r\n\tpersons.addEventListener('change', function() {\r\n\t\tpersonsSum = parseInt(this.value);\r\n\t\tthis.value = personsSum;\r\n\t\ttotal = (daysSum + personsSum)*4000;\r\n\r\n\t\tanimate({ \r\n\t\t\tduration: 400,\r\n\t\t\ttiming: linear,\r\n\t\t\tdraw: function(progress) {\r\n\t\t\t\tif (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {\r\n\t\t\t\t\ttotalValue.innerHTML = 0;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tlet a = total;\r\n\t\t\t\t\ttotalValue.innerHTML = parseInt(progress * (a * place.options[place.selectedIndex].value));\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\r\n\trestDays.addEventListener('change', function() {\r\n\t\tdaysSum = parseInt(this.value);\r\n\t\tthis.value = daysSum;\r\n\t\ttotal = (daysSum + personsSum)*4000;\r\n\r\n\t\tanimate({ \r\n\t\t\tduration: 400,\r\n\t\t\ttiming: linear,\r\n\t\t\tdraw: function(progress) {\r\n\t\t\t\tif (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {\r\n\t\t\t\t\ttotalValue.innerHTML = 0;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tlet a = total;\r\n\t\t\t\t\ttotalValue.innerHTML = parseInt(progress * (a * place.options[place.selectedIndex].value));\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\r\n\tplace.addEventListener('change', function() {\r\n\t\tanimate({ \r\n\t\t\tduration: 400,\r\n\t\t\ttiming: linear,\r\n\t\t\tdraw: function(progress) {\r\n\t\t\t\tif (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {\r\n\t\t\t\t\ttotalValue.innerHTML = 0;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tlet a = total;\r\n\t\t\t\t\ttotalValue.innerHTML = parseInt(progress * (a * place.options[place.selectedIndex].value));\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\r\n\tfunction animate(options){\r\n\t\tvar start = performance.now();\r\n\t\t\t\r\n\t\trequestAnimationFrame(function animation(time){\r\n\t\t\tvar timeFraction = (time - start) / options.duration;\r\n\t\t\tif(timeFraction > 1) timeFraction = 1;\r\n\t\t\t\t\r\n\t\t\tvar progress = options.timing(timeFraction);\r\n\t\t\toptions.draw(progress);\r\n\t\t\t\t\r\n\t\t\tif(progress < 1) requestAnimationFrame(animation);\r\n\t\t});\r\n\t};\r\n\r\n\tfunction linear(timeFraction) {\r\n\t\treturn timeFraction;\r\n\t}\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./parts/calc.js?");

/***/ }),

/***/ "./parts/formAjax.js":
/*!***************************!*\
  !*** ./parts/formAjax.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function formAjax() {\r\n\t// Form\r\n\r\n\tlet message = new Object();\r\n\tmessage.loading = 'Загрузка...';\r\n\tmessage.success = 'Спасибо! Скоро мы с вами свяжемся';\r\n\tmessage.failure = 'Что-то пошло не так...';\r\n\r\n\tlet form = document.getElementsByClassName('main-form')[0],\r\n\t\t\tformBottom = document.getElementById('form'),\r\n\t\t\tthanksModal = document.querySelector('.thanks-modal'),\r\n\t\t\tmainModal = document.querySelector('.main-modal'),\r\n\t\t\tinput = document.getElementsByTagName('input'),\r\n\t\t\tstatusMessage = document.createElement('div');\r\n\t\t\tstatusMessage.classList.add('status');\r\n\r\n\tfunction sendForm(elem) {\r\n\t\telem.addEventListener('submit', function(e) {\r\n\t\t\te.preventDefault();\r\n\t\t\t\telem.appendChild(statusMessage);\r\n\r\n\t\t\t\tlet request = new XMLHttpRequest();\r\n\t\t\t\trequest.open('POST', 'server.php');\r\n\r\n\t\t\t\trequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n\r\n\t\t\t\tlet formData = new FormData(elem);\r\n\r\n\t\t\t\trequest.send(formData);\r\n\r\n\t\t\t\trequest.onreadystatechange = function() {\r\n\t\t\t\t\tif (request.readyState < 4) {\r\n\t\t\t\t\t\tstatusMessage.innerHTML = message.loading;\r\n\t\t\t\t\t} else if (request.readyState === 4) {\r\n\t\t\t\t\t\tif (request.status == 200 && request.status < 300) {\r\n\t\t\t\t\t\t\tthanksModal.style.display = 'block';\r\n\t\t\t\t\t\t\tmainModal.style.display = 'none';\r\n\t\t\t\t\t\t\tstatusMessage.innerHTML = '';\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse {\r\n\t\t\t\t\t\t\tstatusMessage.innerHTML = message.failure;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfor (let i = 0; i < input.length; i++) {\r\n\t\t\t\t\tinput[i].value = '';\r\n\t\t\t\t}\r\n\t\t});\r\n\t}\r\n\t\r\n\tsendForm(form);\r\n\tsendForm(formBottom);\t\r\n}\r\n\r\nmodule.exports = formAjax;\n\n//# sourceURL=webpack:///./parts/formAjax.js?");

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal() {\r\n\t// Modal\r\n\r\n\tlet more = document.querySelector('.more'),\r\n\t\t\toverlay = document.querySelectorAll('.overlay'),\r\n\t\t\tmainModal = document.querySelector('.main-modal'),\r\n\t\t\tpopup = document.querySelector('.main-modal .popup'),\r\n\t\t\tclose = document.querySelectorAll('.popup-close'),\r\n\t\t\tinfoTab = document.querySelector('.info');\r\n\r\n\tinfoTab.addEventListener('click', function(e) {\r\n\t\tlet button = e.target.closest('.description-btn');\r\n\t\tpopup.style.opacity = 0;\r\n\r\n\t\tif (button) {\r\n\t\t\te.target.classList.add('more-splash');\r\n\t\t\tlet myTime = 350;\r\n\t\t\t\t\r\n\t\t\t\tanimate({ \r\n\t\t\t\t\tduration: myTime,\r\n\t\t\t\t\ttiming: quad,\r\n\t\t\t\t\tdraw: function(progress) {\r\n\t\t\t\t\t\tmainModal.style.display = 'block';\r\n\t\t\t\t\t\tpopup.style.position = 'relative';\r\n\t\t\t\t\t\tpopup.style.opacity = progress * 1;\r\n\t\t\t\t\t\tpopup.style.top = `${progress * 10}%`;\r\n\t\t\t\t\t\tpopup.style.left = `${progress * 50}%`;\r\n\t\t\t\t\t\tpopup.style.transform = `translateX(${progress*(-50)}%)`;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\tdocument.body.style.overflow = 'hidden';\r\n\t\t}\r\n\t});   \r\n\r\n\tmore.addEventListener('click', function() {\r\n\t\tthis.classList.add('more-splash');\r\n\t\tpopup.style.opacity = 0;\r\n\t\tlet myTime = 350;\r\n\t\t\t\t\r\n\t\t\tanimate({ \r\n\t\t\t\tduration: myTime,\r\n\t\t\t\ttiming: quad,\r\n\t\t\t\tdraw: function(progress) {\r\n\t\t\t\t\tmainModal.style.display = 'block';\r\n\t\t\t\t\tpopup.style.position = 'relative';\r\n\t\t\t\t\tpopup.style.opacity = progress * 1;\r\n\t\t\t\t\tpopup.style.top = `${progress * 10}%`;\r\n\t\t\t\t\tpopup.style.left = `${progress * 50}%`;\r\n\t\t\t\t\tpopup.style.transform = `translateX(${progress*(-50)}%)`;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\tdocument.body.style.overflow = 'hidden';\r\n\t});\r\n\r\n\tfor (let i = 0; i < close.length; i++) {\r\n\t\tclose[i].addEventListener('click', function() {\r\n\t\t\tfor (let i = 0; i < overlay.length; i++) {\r\n\t\t\t\toverlay[i].style.display = 'none';\r\n\t\t\t}\r\n\t\t\tmore.classList.remove('more-splash');\r\n\t\t\tdocument.body.style.overflow = '';\r\n\t\t});\r\n\t}\r\n\r\n\tfunction animate(options){\r\n\t\tvar start = performance.now();\r\n\t\t\t\r\n\t\trequestAnimationFrame(function animation(time){\r\n\t\t\tvar timeFraction = (time - start) / options.duration;\r\n\t\t\tif(timeFraction > 1) timeFraction = 1;\r\n\t\t\t\t\r\n\t\t\tvar progress = options.timing(timeFraction);\r\n\t\t\toptions.draw(progress);\r\n\t\t\t\t\r\n\t\t\tif(progress < 1) requestAnimationFrame(animation);\r\n\t\t});\r\n\t};\r\n\r\n\tfunction quad(progress) {\r\n\t\treturn Math.pow(progress, 2);\r\n\t}\r\n}\r\n\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./parts/modal.js?");

/***/ }),

/***/ "./parts/scroll.js":
/*!*************************!*\
  !*** ./parts/scroll.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function scroll() {\r\n\t// Scroll\r\n\tlet menu = document.querySelector('nav ul');\r\n\t\t\r\n\tmenu.addEventListener('click', function(e) {\r\n\t\tlet li = e.target.closest('li');\r\n\t\te.preventDefault();\r\n\t\t\tif (li) {\r\n\t\t\t\tlet myTime = 1500;\r\n\t\t\t\tlet elem = document.querySelector(e.target.getAttribute('href'));\r\n\t\t\t\tanimate({ \r\n\t\t\t\t\tduration: myTime,\r\n\t\t\t\t\ttiming: quad,\r\n\t\t\t\t\tdraw: function(progress) {\r\n\t\t\t\t\t\twindow.scrollBy(0, (progress * (elem.getBoundingClientRect().top - menu.offsetHeight)));\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t};\r\n\t});\r\n\r\n\tfunction animate(options){\r\n\t\tvar start = performance.now();\r\n\t\t\t\r\n\t\trequestAnimationFrame(function animation(time){\r\n\t\t\tvar timeFraction = (time - start) / options.duration;\r\n\t\t\tif(timeFraction > 1) timeFraction = 1;\r\n\t\t\t\t\r\n\t\t\tvar progress = options.timing(timeFraction);\r\n\t\t\toptions.draw(progress);\r\n\t\t\t\t\r\n\t\t\tif(progress < 1) requestAnimationFrame(animation);\r\n\t\t});\r\n\t};\r\n\r\n\tfunction quad(progress) {\r\n\t\treturn Math.pow(progress, 2);\r\n\t}\r\n}\r\n\r\nmodule.exports = scroll;\n\n//# sourceURL=webpack:///./parts/scroll.js?");

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\r\n\t// Slider\r\n\r\n\tlet slideIndex = 1, \r\n\t\t\tslides = document.getElementsByClassName('slider-item'),\r\n\t\t\tprev = document.querySelector('.prev'),\r\n\t\t\tnext = document.querySelector('.next'),\r\n\t\t\tdotsWrap = document.querySelector('.slider-dots'),\r\n\t\t\tdots = document.getElementsByClassName('dot');\r\n\r\n\t\t\tshowSlides(slideIndex);\r\n\r\n\tfunction showSlides(n) {\r\n\r\n\t\tif (n > slides.length) {\r\n\t\t\tslideIndex = 1;\r\n\t\t};\r\n\t\tif (n < 1) {\r\n\t\t\tslideIndex = slides.length;\r\n\t\t};\r\n\r\n\t\tfor (let i = 0; i < slides.length; i++) {\r\n\t\t\tslides[i].style.display = 'none';\r\n\t\t}\r\n\r\n\t\tfor (let i = 0; i < dots.length; i++) {\r\n\t\t\tdots[i].classList.remove('dot-active');\r\n\t\t}\r\n\r\n\t\tslides[slideIndex - 1].style.display = 'block';\r\n\t\tdots[slideIndex - 1].classList.add('dot-active')\r\n\t}\r\n\r\n\tfunction plusSlides(n) {\r\n\t\tshowSlides(slideIndex += n);\r\n\t}\r\n\r\n\tfunction currentSlide(n) {\r\n\t\tshowSlides(slideIndex = n);\r\n\t}\r\n\r\n\tprev.addEventListener('click', function() {\r\n\t\tplusSlides(-1);\r\n\t});\r\n\r\n\tnext.addEventListener('click', function() {\r\n\t\tplusSlides(1);\r\n\t});\r\n\r\n\tdotsWrap.addEventListener('click', function(event) {\r\n\t\tfor (let i = 0; i < dots.length + 1; i++) {\r\n\t\t\tif (event.target.classList.contains('dot') && event.target == dots[i - 1]) {\r\n\t\t\t\tcurrentSlide(i);\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n}\r\n\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./parts/slider.js?");

/***/ }),

/***/ "./parts/tab.js":
/*!**********************!*\
  !*** ./parts/tab.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tab() {\r\n\t//Tabs\r\n\tlet tab = document.getElementsByClassName('info-header-tab'),\r\n\t\t\ttabContent = document.getElementsByClassName('info-tabcontent'),\r\n\t\t\tinfo = document.getElementsByClassName('info-header')[0];\r\n\r\n\tfunction hideTabContent(a) {\r\n\t\tfor (let i = a; i < tabContent.length; i++) {\r\n\t\t\ttabContent[i].classList.remove('show');\r\n\t\t\ttabContent[i].classList.add('hide');\r\n\t\t}\r\n\t}\r\n\r\n\thideTabContent(1);\r\n\r\n\tfunction showTabContent(b) {\r\n\t\tif (tabContent[b].classList.contains('hide')) {\r\n\t\t\thideTabContent(0);\r\n\t\t\ttabContent[b].classList.remove('hide');\r\n\t\t\ttabContent[b].classList.add('show');\r\n\t\t}\r\n\t}\r\n\r\n\tinfo.addEventListener('click', function(event) {\r\n\t\tlet target = event.target;\r\n\t\tif (target.className == 'info-header-tab') {\r\n\t\t\tfor (let i = 0; i < tab.length; i++) {\r\n\t\t\t\tif (target == tab[i]) {\r\n\t\t\t\t\tshowTabContent(i);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\t});\r\n}\r\n\r\nmodule.exports = tab;\n\n//# sourceURL=webpack:///./parts/tab.js?");

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\r\n\t// Timer\r\n\r\n\t\tlet deadline = '2018-04-25';\r\n\r\n\t\tfunction getTimeRemaning(endtime) {\r\n\t\t\tlet t = Date.parse(endtime) - Date.parse(new Date()),\r\n\t\t\t\t\tseconds = Math.floor( (t/1000) % 60 ),\r\n\t\t\t\t\tminutes = Math.floor( (t/1000/60) % 60 ),\r\n\t\t\t\t\thours = Math.floor( t/(1000*60*60) );\r\n\t\t\t\tif (t <=0) {\r\n\t\t\t\t\tseconds = 0;\r\n\t\t\t\t\tminutes = 0;\r\n\t\t\t\t\thours = 0;\r\n\t\t\t\t}\r\n\t\t\t\t\t \r\n\r\n\t\t\treturn {\r\n\t\t\t\t'total': t,\r\n\t\t\t\t'hours': hours,\r\n\t\t\t\t'minutes': minutes,\r\n\t\t\t\t'seconds': seconds\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tfunction getZero(num){\r\n\t\t\tif (num >= 0 && num < 10) { \r\n\t\t\t\treturn '0' + num;\r\n\t\t\t} else {\r\n\t\t\t\treturn num;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfunction setClock(id, endtime) {\r\n\r\n\t\t\tlet timer = document.getElementById(id),\r\n\t\t\t\t\thours = timer.querySelector('.hours'),\r\n\t\t\t\t\tminutes = timer.querySelector('.minutes'),\r\n\t\t\t\t\tseconds = timer.querySelector('.seconds');\r\n\r\n\r\n\t\t\tfunction updateClock() {\r\n\t\t\t\tlet t = getTimeRemaning(endtime);\r\n\t\t\t\thours.innerHTML = getZero(t.hours);\r\n\t\t\t\tminutes.innerHTML = getZero(t.minutes);\r\n\t\t\t\tseconds.innerHTML = getZero(t.seconds);\r\n\r\n\t\t\t\tif (t.total <= 0) {\r\n\t\t\t\t\tclearInterval(timeInterval);\r\n\t\t\t\t}\r\n\r\n\t\t\t};\r\n\t\t\t\r\n\t\t\t\tlet timeInterval = setInterval(updateClock, 1000);\r\n\r\n\t\t};\r\n\r\n\t\tsetClock('timer', deadline);\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./parts/timer.js?");

/***/ })

/******/ });