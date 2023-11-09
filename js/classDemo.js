
class People {
  constructor (name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
}


class Student extends People {
  constructor(name, number){
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(`姓名${this.name}, 学号${this.number}`)
  }
}
debugger

const a = new Student('a', 100)
const ab = new Student('b', 101)
a.eat()
console.log(a)
a.sayHi()
console.log(a.id)
a.id = 20
console.log(a.id)