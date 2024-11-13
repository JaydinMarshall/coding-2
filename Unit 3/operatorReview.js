// Arithmetic Operators - Processes that involve math.
let musicSubscriptionPLan_1 = 17.00
let bankAccount = 230.00

function withdrawMusicSub (){
// if money exists - withdraw money for sub
console.log(bankAccount-musicSubscriptionPLan_1)
// if no money - pause sub
}

// Assignment Operators - applying a value to a variable
// MAIN TAKEAWAY : the single equal symbol/sign is used for assignment

var jeans = 200.00;
jeans *=.25 // 25% discount = 50.00
var discount = .45
var calculatedDiscount = jeans * discount
var total = jeans - calculatedDiscount

console.log(total);

// Comparison Operators - analyzing values to one another
// the equal symbol has special properties in JS.\
// single equal (=) : ONLY FOR ASSIGNMENT
var number = 4
// double equal (==) : same as or equal to
var a = 10
var b = 12
console.log(a == b)

var userPassword = '1234'
var dbPassword = '12323'
console.log(userPasswor == dbPassword)

// triple equal (===) : equal value and equal type
var depositAmount = 400.00
var savingsAccount = 400.00

console.logI(depositAmount === savingsAccount)

// exclaimation (!=) : not equal