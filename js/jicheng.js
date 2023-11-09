function Father(name) {
  // 属性
  this.name = name || "father";
  // 实例方法
  this.sayName = function () {
    console.log(this.name);
  };
  this.color = ["red", "blue"];
}
// 原型方法
Father.prototype.age = 18;
Father.prototype.sayAge = function () {
  console.log(this.age);
};

// function Son(name) {
//   this.name = name || "son";
// }

// Son.prototype = new Father();

// let s1 = new Son("s1");
// let s2 = new Son("s2");

// s1.color.push("black");

// console.log(s1.name, s1); //s1
// console.log(s1.color); //['red','blue','black']
// console.log(s1.age); //18
// s1.sayAge(); //18
// console.log(s2.name); //s2
// console.log(s2.color); //['red','blue','black']

// function Son(name) {
//   Father.call(this, "我是传给父类的参数");
//   this.name = name || "son";
// }
// let s = new Son("son");
// console.log(s.name, s); // son
// //s.sayAge(); // 抛出错误（无法继承父类原型方法）
// s.sayName(); // son
// console.log(s.age); // undefined （无法继承父类原型属性）
// console.log(s instanceof Father); // false
// console.log(s instanceof Son); // true

// function Son(name) {
//   // 第一次调用父类构造器 子类实例增加父类实例
//   Father.call(this, "我是传给父类的参数");
//   this.name = name || "son";
// }
// // 经过new运算符 第二次调用父类构造器 子类原型也增加了父类实例
// Son.prototype = new Father();

// let s = new Son("son");
// console.log(s.name, s); // son
// s.sayAge(); // 18
// s.sayName(); // son
// console.log(s.age); // 18
// console.log(s instanceof Father); // true
// console.log(s instanceof Son); // true
// console.log(s.constructor === Father); // true
// console.log(s.constructor === Son); // false

function Son(name) {
  Father.call(this);
  this.name = name || "son";
}

// 方法一  自己动手创建一个中间类
// (function() {
//   let NoneFun = function() {};
//   NoneFun.prototype = Father.prototype;
//   Son.prototype = new NoneFun();
//   Son.prototype.constructor = Son;
// })();

// 方法二  直接借用Object.create()方法
Son.prototype = Object.create(Father.prototype);
// 修复构造函数指向
Son.prototype.constructor = Son;

let s = new Son("son");
console.log(s.name, s); // son
s.sayAge(); // 18
s.sayName(); // son
console.log(s.age); // 18
console.log(s instanceof Father); // true
console.log(s instanceof Son); // true
console.log(s.constructor === Father); // false
console.log(s.constructor === Son); // true

const debance = (fn, delay) => {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const throttle = (fn, delay) => {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
};

console.log(1);

setTimeout(() => {
  console.log(2);
  new Promise((resolve, reject) => {
    console.log(3);
    resolve();
  }).then((res) => {
    console.log(4);
  });
});

new Promise((resolve, reject) => {
  resolve();
})
  .then((res) => {
    console.log(5);
  })
  .then((res) => {
    console.log(6);
  });

new Promise.resolve().then(res => {
  console.log(111)
})

new Promise((resolve, reject) => {
  console.log(7);
  resolve();
})
  .then((res) => {
    console.log(8);
  })
  .then((res) => {
    console.log(9);
  });

setTimeout(() => {
  console.log(10);
  new Promise((resolve, reject) => {
    console.log(11);
    resolve();
    console.log(14);
  }).then((res) => {
    console.log(12);
  });
  console.log(15);
});

console.log(13);

// 1, 7, 13, 5, 8, 6, 9, 2, 3, 4, 10, 11,  12


const cloneDeep = (arr, map = new WeakMap()) => {
  if (typeof arr !== 'object') return arr;
  if (map.get(arr)) return map.get(arr);
  let cloneT = Array.isArray(arr) ? [] : {}
  map.set(arr, cloneT)
  for(const key in arr) {
    cloneT[key] = cloneDeep(arr[key], map)
  }
  return arr;
}


const debonce = (fn, delay) => {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay)
  }
}

const throttle = (fn, delay) => {
  let timer = null, flag = true;
  return () => {
    if (!flag) return;
    flag = false
    timer = setTimeout(() => {
      fn();
      flag = true
    }, delay)
  }
}

const cloneDeep = (target, hash = new WeakMap()) => {
  if (typeof target !== 'object') return target;
  let cloneT = Array.isArray(target) ? [] : {}
  if (hash.get(target)) return hash.get(target)
  hash.set(target, cloneT)
  for (const key in target) {
    cloneT[key] = cloneDeep(target[key], hash)
  }
  return cloneT
}