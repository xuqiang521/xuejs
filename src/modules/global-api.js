import _ from 'utils'
import { observe } from 'observer'
import {
  set,
  del,
  mounted,
  initComputed,
  initWatch
} from 'instance'
import Watcher from 'watcher'
import Compiler from 'compiler'
import '../pages/index.html'
import 'styles'

class Xue {
  constructor(options) {
    this.$options = options || {};
    this._events = Object.create(null);

    this.init(options);
    initWatch(this);
    mounted(this);
  }

  init(vm) {
    let data = this._data = this.$options.data;
    let self = this;

    initComputed(self);

    Object.keys(data).forEach(key => {
      self.proxy(key);
    });

    observe(data, self);
    new Compiler(vm.el || document.body, self);

  }

  proxy(key, setter, getter) {
    let self = this;
    setter = setter ||
      Object.defineProperty(self, key, {
        configurable: false,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(newVal) {
          self._data[key] = newVal;
        }
      })
  }

  $set(target, key, val) {
    set(target, key, val)
  }

  $delete(target, key) {
    del(target, key)
  }

  $watch(expOrFn, cb, options) {
    let vm = this;
    options = options || {};
    let watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value)
    }
    // return function unwatchFn () {
    //   watcher.teardown()
    // }
  }

  /**
   * [$on 监听消息发布事件]
   * @param  {[type]}   event [事件别名]
   * @param  {Function} fn    [事件回调]
   */
  $on(event, fn) {
    let this$1 = this;

    let self = this;
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    }
    else {
      (self._events[event] || (self._events[event] = [])).push(fn);
    }
    return self;
  }
  /**
   * [$once 监听消息发布事件，发布完立即注销监听]
   * @param  {[type]}   event [事件别名]
   * @param  {Function} fn    [事件回调]
   */
  $once(event, fn) {
    let self = this;
    function on() {
      self.$off(event, on);
      fn.apply(self, arguments);
    }
    // on.fn = fn;
    self.$on(event, on);
    return self;
  }
  /**
   * [$off 取消监听]
   * @param  {[type]}   event [事件别名]
   * @param  {Function} fn    [事件回调]
   */
  $off(event, fn) {
    let this$1 = this;

    let self = this;
    // clear all
    if (!arguments.length) {
      this._events = Object.create(null);
      return self;
    }
    // clear array of events
    if (Array.isArray(event)) {
      for (let i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return self;
    }
    // special event
    let cbs = self._events[event];
    if (!cbs) {
      return self;
    }
    if (arguments.length === 1) {
      this._events[event] = null;
      return self;
    }
    // special handler
    let cb;
    let i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return self;
  }

  /**
   * [$emit 发布消息]
   * @param  {[type]} event [事件别名]
   */
  $emit(event) {
    let self = this;
    let cbs = this._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? _.toArray(cbs) : cbs;
      let args = _.toArray(arguments, 1);
      for (let i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(self, args);
      }
    }
    return self;
  }
}

module.exports = window.Xue = Xue;
