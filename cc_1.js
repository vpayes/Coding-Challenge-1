// Task 1: Variables and Data Types 

let employeeName = "Devonte Lykins";
const employeeID = 1203;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



 // Task 2: Compound Data Types

 let products = ["Basket Ball", "Sneakers", "Hoop"];
 const productDetails = {
         name: products,
         price: 100.00,
         inStock: 5000, 
 }

 console.log(products, productDetails)



 // Task 3: Assignment Operators

 let accountBalance = 20000;

 accountBalance += 500;
 console.log(accountBalance = 20500);

 accountBalance -= 500
 console.log(accountBalance = 20000);

 accountBalance *= 2
 console.log(accountBalance = 40000);

 accountBalance /= 2
 console.log(accountBalance = 20000);

 accountBalance %= 2
 console.log(accountBalance = 0);



 // Task 4: Comparison Operators 

 let employeeScore1 = 95
 let employeeScore2 = 70

 console.log("employeeScore1 > employeeScore2:", employeeScore1 > employeeScore2);
 console.log("employeeScore1 < employeeScore2:", employeeScore1 < employeeScore2);
 console.log("employeeScore1 >= employeeScore2:", employeeScore1 >= employeeScore2);
 console.log("employeeScore1 <= employeeScore2:", employeeScore1 <= employeeScore2);
 console.log("employeeScore1 === employeeScore2:", employeeScore1 === employeeScore2);
 console.log("employeeScore1 !== employeeScore2:", employeeScore1 !== employeeScore2);


 // Task 5: Logical Operators 

 let hasKeyCard = true;
 let hasPermission = false; 

 let accessAreaA = hasKeyCard && hasPermission;
 console.log("Can access Area A:", accessAreaA);

 let accessAreaB = hasKeyCard || hasPermission;
 console.log("Can access Area B:", accessAreaB);

 let deniedAreaA = !accessAreaA;
 console.log("Cannot access Area A:", deniedAreaA);

 let deniedAreaB = !accessAreaB;
 console.log("Cannot access Area B:", deniedAreaB);


