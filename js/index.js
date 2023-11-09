class EventEmitter {
  constructor() {
    this.events = {}
  }
  // 订阅
  on(type, callback) {
    if (!this.events) this.events = Object.create(null)
    if (!this.events[type]) {
      this.events[type] = [callback]
    } else {
      this.events[type].push(callback)
    }
  }
  // 删除
  off(type, callback) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter(item => item !== callback)
  }

  // once
  once(type, callback) {
    function fn() {
      callback();
      this.off(type, fn)
    }
    this.on(type, fn);
  }
  // emit
  emit(type, ...rest) {
    this.events[type] && this.events[type].forEach(fn => fn.apply(this, rest))
  }
}

const ev = new EventEmitter();
const handle = (...rest) => { console.log(rest) }
ev.on("click", handle);
ev.emit("click", 1, 2, 3, 4);
ev.off('click', handle)
ev.emit('click', 1,2)
ev.once('dbclick', () => { console.log(1234) })
ev.emit('dbclick')
ev.emit('dbclick')
