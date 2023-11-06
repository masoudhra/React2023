// function duplicate(number){
//     const result = number * 2;
//     return result;
// }

// console.log(duplicate(10))

// Fira code is a name of font

// Arrow function

// const duplicate = (number) => number * 2;

// console.log(duplicate(10));
// agar yek voroodi dashte bashim mitoonim nazarim parantezo
// agar vorooddi nadashte bashim paranteze khali mizarim
// baraye func haye chand khati az {} esteffade mikonim va cod ra minevisim

// map
// const arr = [1, 2, 3];
// const newArr = arr.map((item) => item * 2);
// console.log(newArr)

// filter - find
// const numbers = [22, 3, 43, 65, 7];
// const newNumbers = numbers.filter(item => item > 10);
// console.log(newNumbers);

// const number = [22, 3, 43, 65, 7];
// const newNumber = number.find(item => item > 10);
// console.log(newNumber);
// avalin sharti ke true hast ro mide 

// reduce
// kolle arayaro tabdil mikone beyek meghdar
// const numbers = [2, 3, 4, 6, 7];
// const result = numbers.reduce(
//     (acc, cur) => acc + cur, 
//     0
//     );
//     console.log(result)


//template literals:
// const name = "Masoud";
// const age= 33;

// const text = `Hi I am ${name} and I am ${age} years old`;
// console.log(text);

// destructuring
// const data = {
//     name: "Masoud", 
//     age: 33, 
//     address: {city: "wellington", street: "taranaki" },
// };
// const { name, age, address: {city, street} } = data;

// console.log(street);

// spread operator:
// const numbers1 = [1, 2, 3, 4];
// const words = ["a", "b"]
// const numbers2 = [0, ... numbers1, ... words, 8];
// console.log(numbers2);

// ternary operator:
// const number = 5;
// const result =
// number > 10 ? "Number is greater than 10" : "Number is less than 10";
// console.log(result)

// async js - promis

fetch("https://jsonplaceholder.typicode.com/todos")
 .then((res) => res.json())
 .then((json) => console.log(json));