import _ from 'utils'
// import config from 'utils/config'
import { defineReactive} from 'observer'
import Watcher from 'watcher'
import Dep from 'observer/dep'

exports.initComputed = function (vm) {
  let computed = vm.$options.computed;

  if (!computed || typeof computed !== 'object') return;
  Object.keys(computed).forEach(key => {
    let userDef = computed[key];
    let getter = typeof userDef === 'function' ? userDef : userDef.get;

    if (getter === undefined) {
      warn(
        ("No getter function has been defined for computed property \"" + key + "\"."),
        vm
      );
      getter = _.noop;
    }

    Object.defineProperty(vm._data, key, {
      enumerable: true,
      configurable: true,
      get:  getter,
      set: _.noop
    })
  });
}

exports.initWatch = function (vm, options) {
  let watch = vm.$options.watch;
  for (let key in watch) {
    let handler = watch[key];
    new Watcher(vm, key, handler);
  }
}

/**
 * {Object | Array} target
 * {string | number} key
 * {any} value
 */
exports.set = function (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (_.hasOwn(target, key)) {
    target[key] = val;
    return val;
  }
  let ob = (target).__ob__;
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * {Object | Array} target
 * {string | number} key
 */
exports.del = function (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return;
  }
  let ob = (target).__ob__;
  if (!_.hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

// lifeCycle
exports.mounted = function (vm) {
  let handler = vm.$options.mounted;
  handler && handler();
}

// nextTick
exports.nextTick = (function () {
  let callbacks = [];
  let pending = false;
  let timeFunc;

  // 下一进程处理
  function nextTickHandler () {
    pending = false;
    let copies = callbacks.slice(0);
    callbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  if (typeof Promise !== 'undefined' && _.isNative(Promise)) {
    let p = Promise.resolve();
    let logError = function (err) { console.error(err); };
    timeFunc = function () {
      p.then(nextTickHandler).catch(logError);
    }
  }
  else {
    timeFunc = function () {
      setTimeout(nextTickHandler, 0);
    }
  }

  return function queueNextTick (cb, ctx) {
    let _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          logError(e);
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})()
