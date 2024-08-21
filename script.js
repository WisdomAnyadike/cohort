let todaysClass = 'Intoduction to Javascript'
let helloWorld = 'hello world'
console.log(helloWorld);



// "fsghjkl" , 'njjsmkx' , `mcl,;.`
// 4 , 45456 ,4667


let myFirstSection = document.getElementById('divu')
console.log(myFirstSection);

myFirstSection.style.backgroundColor = 'rgb(234,56,67)'
myFirstSection.style.width = '200px'
myFirstSection.style.height = '200px'



let myImage = document.getElementById('img')
console.log(myImage);
// innerHTML
// innerText
// textContent

myImage.src = 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg'
myImage.style.borderRadius = '20px'


let input = document.getElementById('input1')
// input.value = '34567890'
input.placeholder = 'input here'

let h1Tag = document.createElement('h1')
console.log(h1Tag);
h1Tag.textContent = 'i am here'
myFirstSection.prepend(h1Tag)

let class1

let value2 = Symbol('description')
console.log(value2);

let obj = {
    name: 'wisdom', class: 'js', age: 30, isSmart: true, willLeaveAfterClass: undefined, obj1: {}, myArr: [], myFunc: function sayHello() {
        console.log('hello');
    }
}

let arr = ['hi', 20, undefined, null, [], {}]


let word = 'JavaScript'

console.log(word[9]);

word[9] = 'h'
console.log(word);


let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

let one = 'i'
let two = 'am'
let three = 'a'
let four = 'boy'

let sentence = one + two + three + four
let sentence1 = `${one} ${two} ${three} ${four}`
console.log(typeof sentence);
console.log(sentence);
console.log(sentence1)

let a = 3
let b = 5

let sentence2 = 'the sum of ' + a + ' and ' + b + ' is ' + (a + b)
let sentence3 = `the sum of ${a} and ${b} is ${a + b}`

let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = Math.PI      // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)


let value = 200.67

let roundedValue = Math.round(value)
console.log(roundedValue);


let maximum = Math.max(3, 45, 67, 2, 56, -8, 44, -32)
console.log(maximum);

let randomNumber = Math.random()
console.log(randomNumber);

let random10 = Math.floor(Math.random() * 11)

let randumnum = Math.random() * 101
let randumnumfloor = Math.floor(randumnum)
console.log(randumnumfloor)

let randomn = Math.floor(Math.random * 91) + 10
console.log(randomn)

let text = 'My name is Asabeneh Yetayeh. I live in Finland, Helsinki.'

console.log(text)

text = text.toUpperCase()
console.log(text);


let string = 'Ja + va + Scr + ipt'

let hisName = text.substr(11, 16)
let hisName2 = text.slice(11, 19)
console.log(hisName);
console.log(hisName2);


let country = 'Finland'

let spliter = string.split(' + ')

console.log(spliter);


let string1 = '   30 Days Of JavaScript   '

console.log(string1)
console.log(string1.trim('  '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

let sentence9 = 'javascript is not nice not'

sentence9 = sentence9.replaceAll('not ', '')

console.log(sentence9);


let herName = 'Sholape'

let myNewSentence = firstName.concat(string1, sentence9).trim()
console.log(myNewSentence);