
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
