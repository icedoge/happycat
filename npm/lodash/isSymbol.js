"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},baseGetTag=require("./_baseGetTag.js"),isObjectLike=require("./isObjectLike.js"),symbolTag="[object Symbol]";function isSymbol(e){return"symbol"==(void 0===e?"undefined":_typeof(e))||isObjectLike(e)&&baseGetTag(e)==symbolTag}module.exports=isSymbol;