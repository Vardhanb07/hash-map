import { hashMap } from "./hashMap.js"
const test = new hashMap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('kite', 'blue')
test.set('apple', 'green')
test.set('dog', 'white')
test.set('moon', 'silver')
console.log(test.entries())
console.log(test.length())
console.log(test.get('moon'))
console.log(test.get('h'))
console.log(test.has('u'))
console.log(test.has('apple'))
test.remove('grape')
console.log(test.entries())
console.log(test.length())
console.log(test.keys())
console.log(test.values())
test.clear()
console.log(test.length())
console.log(test.entries())