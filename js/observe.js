
// 触发更新视图
function updateView() {
  console.log('视图更新')
}

function observer(target, key, value) {
  if (!target || typeof target !== 'object') {
    return target
  }
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        value = newValue
        // 数据变化，更新视图
        updateView()
      }
    }
  })

  Object.keys(target).forEach(key => {
    defineReactive(target, key, target[key])
  })
}