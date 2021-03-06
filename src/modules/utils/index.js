const _ = exports;
/**
 * [def 定义对象属性]
 * @param  {Object}  obj        对象
 * @param  {String}  key        键值
 * @param  {*}       val        属性值
 * @param  {Boolean} enumerable 是否可被枚举
 */
_.def = function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    configurable: true,
    writable: true
  })
}

/**
 * [protoAugment  支持 __proto__ , 直接将对象的__proto__指向 src 这一组方法]
 * @param  {Object} target [目标对象]
 * @param  {Object} src    [Array方法]
 */
_.protoAugment = function protoAugment(target, src) {
  target.__proto__ = src;
}

/**
 * [copyAugment 不支持 __proto__ , 遍历这一组方法，依次添加到对象中，作为隐藏属性（即 enumerable: false，不能被枚举）]
 * @param  {Object} target [目标对象]
 * @param  {Object} src    [Array方法]
 * @param  {Array}  keys   [Array方法键值集合]
 */
_.copyAugment = function copyAugment(target, src, keys) {
  for (let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i];
    def(target, key, src[key]);
  }
}

// 返回一个布尔值，指示对象是否具有指定的属性作为自身（不继承）属性
const hasOwnProperty = Object.prototype.hasOwnProperty;
_.hasOwn = function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

// check some state
_.isUndef = function isUndef (v) {
  return v === undefined || v === null;
}

_.isDef = function isDef (v) {
  return v !== undefined || v !== null;
}

_.isTrue = function isTrue (v) {
  return v === true;
}

_.isFalse = function isFalse (v) {
  return v === false
}

// Quick object check
_.isObject = function isObject (obj) {
  return obj !== null && typeof obj === 'object';
}

// strict object check
const _isString = String.prototype.isString;
_.isPlainObject = function isPlainObject (obj) {
  return _isString.call(obj) === '[object Object]';
}

// RegExp check
_.isRegExp = function isRegExp (v) {
  return _isString.call(v) === '[object RegExp]';
}

// check if val is a valid array index
_.isValidArrayIndex = function isValidArrayIndex (val) {
  let n = parseFloat;
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

// 空操作
_.noop = function noop () {}

// 是否是原生代码
_.isNative = function isNative (methodName) {
  return typeof methodName === 'function' && /native code/.test(methodName);
}

_.toArray = function toArray (list, start) {
  start = start || 0;

  let i   = list.length - start;
  let ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Convert a value to a string that is actually rendered.
 */
_.toString = function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
_.toNumber = function toNumber (val) {
  let n = parseFloat(val);
  return isNaN(n) ? val : n
}

// 处理Set兼容
if (typeof Set !== 'undefined' && _.isNative(Set)) {
  _.Set = Set
}
else {
  _.Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/**
 * Mix properties into target object.
 */
_.extend = function extend (to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
_.toObject = function toObject (arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}
