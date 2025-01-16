// a js array is a collection data type, for storing different types of data

// example: 
classes = ["math", "reading", "gym", 10, 10.23, true, "reading"];

Var shirts= ['s','m','2']
Var shoe=['nike', 'addidas']

// Methods = A special type of function that works on lists and objects

// push() method - special function that allows us to add an item to a list. the ew peice of data will always go to the end of the list
// Push does require an argument (data). telling the program what you want to add
//LIFO (Last in, First Out)
var bookbag=[ 'pencils', 'pens','notebooks']
bookbag.push('sketch book')
console.log(bookbag)

// pop() method - a special function that allows us to remove an item from a list. The most recent item, usually at the end of the list, will be removed
// the pop method does not need an argument - it will always remove the last item
bookbag.pop()
console.log(bookbag)

// length function - a special function that counts the number of items inside of a list

console.log(bookbag.length)

function amazoncart(){
    itemsInCart=[];
    itemsInCart.push(item);
    console.log()
}

amazoncart(['pen', 'pencil', 'notebook'])
