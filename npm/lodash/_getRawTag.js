"use strict";var _Symbol=require("./_Symbol.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;function getRawTag(t){var o=hasOwnProperty.call(t,symToStringTag),r=t[symToStringTag];try{t[symToStringTag]=void 0}catch(t){}var e=nativeObjectToString.call(t);return o?t[symToStringTag]=r:delete t[symToStringTag],e}module.exports=getRawTag;