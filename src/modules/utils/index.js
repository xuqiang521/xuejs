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

// 空操作
_.noop = function noop () {}

// 是否是原生代码
_.isNative = function isNative (methodName) {
  return typeof methodName === 'function' && /native code/.test(methodName);
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
