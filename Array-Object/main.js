//! Task 1

function threeDivisibleValueAverage(array) {
    let count = 0
    let total = 0
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0) {
            total += array[i]
            count++
        }
    }
    average = total / count
    console.log(average);
}

threeDivisibleValueAverage([1,2,3,4,5,6,6])

//! Task 2

function numberBigTwoCountTotal(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 99) {
            total += array[i]
        }
    }
    console.log(total);
}

numberBigTwoCountTotal([1, 100, 300, 301, 99])

//! Task 3

function maxAndMinAverage(array) {
    let max = array[0];
    let min = array[0];
    let average = 0
    let total = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min) {
            min = array[i]
        }
    }
    total = max + min
    average = total/2
    console.log(average);
}

maxAndMinAverage([1,4,5,3,9,8])

//! Task 4

function nameBeginAChar(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === "A") {
            count++
        }
    }
    console.log(count);
}

nameBeginAChar(["Aynur", "Aysen" , "Elmir" , "Elnur", "Xaqani", "Rövşən"])

//! Task 5

function workerSalaryHigher(array) {
    array.forEach(obj => {
        if (obj.salary > 500) {
            console.log(obj.firstName, obj.lastName);
        }
    });
}

workerSalaryHigher([{
    firstName: "Elnur",
    lastName: "Qasımov",
    salary: 30000
}, {
    firstName: "Elmir",
    lastName: "Hüseynov",
    salary: 50000
}, {
    firstName: "İlahə",
    lastName: "Hüseynova",
    salary: 50000
}, {
    firstName: "Nəsimi",
    lastName: "Ağayev",
    salary: 400
},{
    firstName: "Leyla",
    lastName: "Ağayeva",
    salary: 200
}
])