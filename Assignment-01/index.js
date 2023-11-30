import inquirer from "inquirer";
let Cart;
let loop = true;
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "options",
        message: "Dear customer, what would you like to buy?",
        choices: ["groceries", "vegetables", "fruits"],
    },
]);
console.log(answer);
const shoppingCart = [];
while (loop) {
    if (answer.options == "groceries") {
        const grocers = await inquirer.prompt([
            {
                type: "list",
                name: "groceries",
                message: "Here is the list of Available groceries?",
                choices: [`soap: 250`, `Suger: ${90}`, `tea: ${450}`],
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Do you want to add more",
                default: false,
            },
        ]);
        const { groceries, addmore } = grocers;
        shoppingCart.push(groceries);
        loop = addmore;
    }
    else if (answer.options == "fruits") {
        const fruits = await inquirer.prompt([
            {
                type: "list",
                name: "Fruits",
                message: "Here is the list of Available Fruits",
                choices: ["banana:150", "apple:280", "kiwi:500", "oranges:250"],
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Do you want to add more",
                default: false,
            },
        ]);
        const { Fruits, addmore } = fruits;
        shoppingCart.push(Fruits);
        loop = addmore;
    }
    else if (answer.options == "vegetables") {
        const veggies = await inquirer.prompt([
            {
                type: "list",
                name: "Vegetables",
                message: "Here is the list of Available Groceries",
                choices: ["potato:50", "tomato:30", "spinich:25", "chilies:20"],
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Do you want to add more",
                default: false,
            },
        ]);
        const { Vegetables, addmore } = veggies;
        shoppingCart.push(Vegetables);
        loop = addmore;
    }
}
let grandTotal = [];
let sum = 0;
for (let x in shoppingCart) {
    let trim = shoppingCart[x].search(":");
    let value = shoppingCart[x].slice(trim + 1);
    grandTotal.push(parseInt(value));
}
grandTotal.forEach((num) => {
    sum += num;
});
let discounted = (sum * 5) / 100;
if (sum > 100) {
    sum = sum - discounted;
}
let number = 100 - (100 * 5) / 100;
console.log(shoppingCart);
console.log(`Total Items: ${grandTotal.length} Item(s)\nGrand Total: Rs ${sum}.00\nTotal Discout: Rs ${discounted}`);
const checkOut = await inquirer.prompt([
    {
        type: "list",
        name: "PaymentMethod",
        message: "What would be your prefferred Payment method",
        choices: ["Cash", "POS", "EasyPaisa", "Mater Card"],
    },
]);
if (checkOut.PaymentMethod == "POS") {
    console.log("Please Provide Your debit / credit Card");
}
else if (checkOut.PaymentMethod == "EasyPaisa") {
    console.log(`Please deposit a sum of Rs.${sum} to our EasyPaisa Account Number +923321235456 `);
}
else if (checkOut.PaymentMethod == "Master Card") {
    console.log("Sorry this Payment method is not available yet");
}
else if (checkOut.PaymentMethod == "Cash") {
    console.log(`Thanks for depositing a bill of Rs. ${sum} in cash`);
}
console.log(`Thank you for shopping with us, Please visit again...`);
console.log("Task 2");
console.log("Scenario 1: Sum numbers");
let add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(15, 25));
console.log("Scenario 2 - Check Even or Odd");
let checkEvenOrOdd = (num) => {
    if (num % 2 == 0) {
        return `The number ${num} is even`;
    }
    else {
        return `The number ${num} is odd`;
    }
};
console.log(checkEvenOrOdd(5));
console.log("Scenario 3: Calculate Area");
let calculateArea = (width, height) => {
    return width * height;
};
console.log(calculateArea(5, 5));
console.log("Scenario 4: String Reversal");
let originalString = "Hello World";
let reverseString = (str) => {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
};
console.log(reverseString("Hello World"));
console.log("Sencario 5: Temperature Conversion");
let convertCelsiusToFahrenheit = (celciusTemp) => {
    let ferheneit = (celciusTemp * 9) / 5 + 32;
    return `${celciusTemp}\u00B0C is converted to ferhenit and its value is ${ferheneit}\u00B0 F`;
};
console.log(convertCelsiusToFahrenheit(32));
console.log("Task - 3 (Scenario 1 - Modify Array with Methods");
const myFruitsArray = ["apples", "banana", "oranges"];
console.log(myFruitsArray);
myFruitsArray.push("kiwi", "pineapple");
console.log(myFruitsArray);
myFruitsArray.pop();
console.log(myFruitsArray);
let fruitsfirstitem = myFruitsArray.shift();
console.log(fruitsfirstitem);
console.log(myFruitsArray);
myFruitsArray.unshift("grapes");
console.log(myFruitsArray);
console.log("Task - 3 (Scenario 2 - Subarray Creation");
// Splice & Slice Methods
console.log("splice & slice methods");
let myVegetables = ["tomato", "potato", "ginger", "lemon"];
// Splice Method
// Splice method basically acceps three arguments, first indiates the start of splice and the second argument to mention the index upto which we want to delete the items. Third argument is used to indicate any other items which we want to add in the original Array.
let newArr = myVegetables.splice(0, 2, "chilies", "mint");
// removed first two items from the Array, saved them in new Array new newArr and instead of first two items added other two items i.e. chilies and mint in the original Array
console.log(myVegetables);
console.log(newArr);
console.log("slice");
// Slice is basically used to extract some infromation from an array without modifying the original Array
const mystudents = ["Fahad", "Abdullah", "Rohan", "Irum", "Sana", "Komal"];
// it accepts 3x arguments, start, end and string,
let sliced = mystudents.slice(2);
let firstTwosliced = mystudents.slice(0, 2);
console.log(mystudents);
console.log(sliced);
console.log(firstTwosliced);
