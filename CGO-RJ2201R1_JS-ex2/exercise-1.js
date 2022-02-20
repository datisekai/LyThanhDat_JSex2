//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
    id: 1,
    firtName: "A",
    lastName: "Nguyen",
    className: "CGO-RJ2201R1",
    grade: "C",
  },
  {
    id: 2,
    firtName: "B",
    lastName: "Tran",
    className: "CGO-RJ2201R1",
    grade: "D",
  },
  {
    id: 3,
    firtName: "C",
    lastName: "Dinh",
    className: "CGO-RJ2201R1",
    grade: "A",
  },
  {
    id: 4,
    firtName: "D",
    lastName: "Le",
    className: "CGO-RJ2201R1",
    grade: "B",
  },
  {
    id: 5,
    firtName: "D",
    lastName: "Hoang",
    className: "CGO-RJ2201R1",
    grade: "F",
  },
  {
    id: 6,
    firtName: "E",
    lastName: "Pham",
    className: "CGO-RJ2201R1",
    grade: "E",
  },
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
const showFullName = (traineeIterator) =>
  traineeIterator.forEach((item) => {
    console.log(`Fullname is ${item.firtName} ${item.lastName}`);
  });

// showFullName(traineeIterator)

//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F)
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
const showGrade = (traineeIterator) =>
  traineeIterator.forEach((item) => {
    console.log(`${item.firtName} ${item.lastName} / ${item.grade} `);
  });

// showGrade(traineeIterator)

//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *
const expectedTraineeArray = traineeIterator.map((item) => ({
  newId: `${item.className} - ${item.id}`,
  fullName: `${item.firtName} ${item.lastName}`,
  rank: item.grade,
}));

console.log(expectedTraineeArray);

//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *
const checkGrade = (grade) =>
  grade == "A"
    ? "Excellent"
    : grade == "B"
    ? "Good"
    : grade == "C"
    ? "Medium"
    : grade == "D"
    ? "Weak"
    : grade == "E"
    ? "Poor"
    : "Disbanded";
const newTraineeArray = traineeIterator.map((item) => ({
  id: item.id,
  codeName: `[${item.className}] - ${item.firtName} ${item.lastName}`,
  classification: checkGrade(item.grade),
}));

// console.log(newTraineeArray);

//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *
const traineeLessB = traineeIterator.filter(
  (item) =>
    item.grade === "C" ||
    item.grade === "D" ||
    item.grade === "E" ||
    item.grade === "F"
);
console.log(traineeLessB);

//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *
const checkTrainee = (traineeIterator) => {
  const trainee = traineeIterator.filter(
    (item) => item.grade === "A" || item.grade === "B"
  );
  if (trainee.length / traineeIterator.length >= 50 / 100)
    alert("Failed training!");
  if (trainee.length / traineeIterator.length < 30 / 100)
    alert("Average training!");
  if (traineeIterator.length === 0) alert("Failed training!");
};

// checkTrainee(traineeIterator)

//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
const showTraineeA = (traineeIterator) =>
  traineeIterator.filter(
    (item) => item.grade === "A" && alert(`${item.firtName} ${item.lastName}`)
  );
// console.log(showTraineeA(traineeIterator));

//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
const showTraineeF = (traineeIterator) =>
  traineeIterator.filter(
    (item) => item.grade === "F" && alert(`${item.firtName} ${item.lastName}`)
  );
// console.log(showTraineeF(traineeIterator));

//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *
const stringGrade = traineeIterator.reduce((result, value) => result + value.grade, "");
console.log(stringGrade);

//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *
const giaiThua = (value) => {
  const numbers = [];
  for (let i = 1; i <= value; i++) {
    numbers.push(i);
  }
  return numbers.reduce((result, value) => result * value, 1);
};

console.log(giaiThua(6));

//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *
const compareGrade = () => {
  const grade = traineeIterator.map((item) =>
    item.grade === "A"
      ? 1
      : item.grade === "B"
      ? 2
      : item.grade === "C"
      ? 3
      : item.grade === "D"
      ? 4
      : item.grade === "E"
      ? 5
      : 6
  );
  
  grade.sort((a,b) => b - a)
  return [grade[0],grade[grade.length - 1],(grade[0] + grade[grade.length - 1]) / 2]
};

console.log(compareGrade());