import { observe } from 'observer'
import {
  set,
  del,
  initComputed
} from 'instance'
import Compiler from 'compiler'
import '../pages/index.html'
import 'styles'

class Xue {
  constructor (options) {
    this.$options = options || {};

    this.init(options);
  }

  init (vm) {
    let data = this._data = this.$options.data;
    let self = this;

    initComputed(self);

    Object.keys(data).forEach(key => {
      self.proxy(key);
    });

    observe(data, self);
    new Compiler(vm.el || document.body, self);

  }

  proxy (key, setter, getter) {
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

  $set (target, key, val) {
    set (target, key, val)
  }

  $delete (target, key) {
    del (target, key)
  }
}



module.exports = window.Xue = Xue;
