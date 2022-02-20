//Cho các đối tượng sau
const obj = {
  id: 1,
  name: 'Trainer',
  age: 33,
  skills: ['Javascript', 'React', 'NextJS', 'Typescript']
};

const anotherObj = {
  id: 2,
  name: 'Trainee',
  age: 22,
  isFinite: false,
  isBeingTrained: true
};

//1. Hãy clone 2 đối tượng trên bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *
//Spread
const cloneObj = {...obj}
const cloneAnother = {...anotherObj}
//Object.assign()
const cloneObj2 = Object.assign(obj)
const cloneAnother2 = Object.assign(anotherObj)


//2. Đoán thử kết quả sau đây, không chạy thử
const copiedObj = obj;
copiedObj.skills = ['React', 'Typescript'];
console.log(obj.skills);
// * YOUR ANSWER HERE *
//['React', 'Typescript']



//3. Hãy merge 2 đối tượng đã cho thành 1 đối tượng mới bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *
//Spread
const newObject = {...obj,...anotherObj}
//Object.assign()
const newObject2 = Object.assign(obj,anotherObj)

//4.  Sử dụng Map trong ES6, hãy tạo ra 1 biến có giá trị như sau:
/*
[
  ["whole numbers": [1 ,2 ,3 ,4]],
  ["Decimal numbers": [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers": [-1, -2, -3, -4]]
]
*/
// *YOUR CODE HERRE *
let map = new Map([
  ["whole numbers", [1 ,2 ,3 ,4]],
  ["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers", [-1, -2, -3, -4]]
])


//5. Sử dụng Map trong ES6, hãy tạo ra 1 map từ 2 đối tượng đã cho trên
// *YOUR CODE HERRE *

let map2 = new Map(Object.entries(obj), Object.entries(anotherObj))
console.log(map2);


