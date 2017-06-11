import _ from 'utils'
import { defineReactive} from 'observer'
import Watcher from 'watcher'
import Dep from 'observer/dep'

exports.initComputed = function (vm) {
  let watchers = vm._computedWatchers = Object.create(null);
  let computed = vm.$options.computed;

  if (!computed) return;
  if (typeof computed === 'object') {
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
      watchers[key] = new Watcher(vm, getter, _.noop);

      Object.defineProperty(vm._data, key, {
        enumerable: true,
        configurable: true,
        get:  typeof computed[key] === 'function'
          ? computed[key]
          : computed[key].get,
        set: _.noop
      })
    });
  }
}

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
