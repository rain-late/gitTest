
// const isObject = obj => typeof obj === 'object' && obj !== null

// const isEquals = (obj1, obj2) => {
//   if (!isObject(obj1) || !isObject(obj2)) return obj1 === obj2
//   if (obj1 === obj2) return true
//   const obj1Keys = Object.keys(obj1)
//   const obj2Keys = Object.keys(obj2)
//   if (obj1Keys.length !== obj2Keys.length) return false

//   for (let key in obj1) {
//     const res = isEquals(obj1[key], obj2[key])
//     if (!res) return false
//   }


//   return true
// }

// const cloneDeep = (obj, map = new WeakMap()) => {
//   if (!isObject(obj)) return obj
//   if (map.get(obj)) return map.get(obj)
//   const result = Array.isArray(obj) ? [] : {}
//   map.set(obj, result)
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = cloneDeep(obj[key], map)
//     }
//   }
//   return result
// }

// $div = document.querySelector('.bgCol')

// let curWidth = 100
// let maxWidth = 1000
// const animate = () => {
//   curWidth += 3
//   $div.style.width = curWidth + 'px'
//   if (curWidth < maxWidth) {
//     window.requestAnimationFrame(animate)
//   }
// }
// animate()

// const obj = {}

// for (let i = 0; i < 1000 * 10000; i++) {
//   obj[i + ''] = i
// }
//  console.time('for in')
//  obj['2000000']
//  console.timeEnd('for in')
//  console.time('delete')
//   delete obj['2000000']
//   console.timeEnd('delete')

  // const obj = new Map()
  // for (let i = 0; i < 1000 * 10000; i++) {
  //   obj.set(i + '', i)
  // }
  // console.time('map')
  // obj.has('20000000')
  // console.timeEnd('map')

  // console.time('map delete')
  // obj.delete('20000000')
  // console.timeEnd('map delete')

  // const arr = [
  //   {name: 'a', age: 20},
  //   {name: 'b', age: 30},
  //   {name: 'c', age: 40},
  // ]
  // const str = arr.reduce((s, item) => {
  //   return `${s}${item.name} - ${item.age}\n`
  // }, '')
  // console.log(str)
