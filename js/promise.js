
// Promise/A+ 规范
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  value = undefined // 成功的值
  reason = undefined // 失败的原因
  state = MyPromise.PENDING // 当前状态
  resolveCallbacks = [] // 成功的回调
  rejectCallbacks = [] // 失败的回调
  constructor(fn) {
    const resolveHandle = (value) => {
      if (this.state === MyPromise.PENDING) {
        this.state = MyPromise.FULFILLED
        this.value = value
        this.resolveCallbacks.forEach(fn => fn(this.value))
      }
    }
    const rejectHandle = (reason) => {
      if (this.state === MyPromise.PENDING) {
        this.state = MyPromise.REJECTED
        this.reason = reason
        this.rejectCallbacks.forEach(fn => fn(this.reason))
      }
    }
    try {
      fn(resolveHandle, rejectHandle)
    }catch (err) {
      rejectHandle(err)
    }
  }
  then(fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : value => value
    fn2 = typeof fn2 === 'function' ? fn2 : reason => reason

    if(this.state === MyPromise.PENDING) {
      return new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (err) {
            reject(err)
          }
        })
        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason)
            reject(newReason)
          } catch (err) {
            reject(err)
          }
        })
      })
    }

    if (this.state === MyPromise.FULFILLED) {
      return new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value)
          resolve(newValue)
        } catch (err) {
          reject(err)
        }
      })
    }

    if (this.state === MyPromise.REJECTED) {
      return new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (err) {
          reject(err)
        }
      })
    }
  }
  catch(fn) {
    return this.then(null, fn)
  }
}

MyPromise.resolve = function(value) {
  return new MyPromise((resolve, reject) => {
    resolve(value)
  })
}

MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason)
  })
}

MyPromise.all = function(promises = []) {
  return new MyPromise((resolve, reject) => {
    const result = []
    const length = promises.length
    let resolveCount = 0
    promises.forEach((promise) => {
      promise.then((value) => {
        result.push(value)
        resolveCount++
        if (resolveCount === length) {
          resolve(result)
        }
      }).catch((reason) => {
        reject(reason)
      })
    })
  })
}

MyPromise.race = function(promises = []) {
  let resolved = false
  return new MyPromise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((value) => {
        if (!resolved) {
          resolve(value)
          resolved = true
        }
      }).catch((reason) => {
        reject(reason)
      })
    })
  })
  }
