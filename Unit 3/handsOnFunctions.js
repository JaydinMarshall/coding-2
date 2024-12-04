// Discuss the anatomy of a function

// ()= Curly brackets are called parameters.

// this is the designated area for where we pass in data into the function definition

//parameter= just a place holder for data

// data= data types

function profileBio(name, income){
console.log('username = ' + name)
console.log('net worth is:' + income)
}

profileBio('Jay', 389939309)

// Lesson on Conditional Statements

//conditional statements are comprised of the "IF" and "ELSE" keywords

//They allow us to make decesions in our functions based on the data we recieve.

function checkTVinventory(){
    if(tvs>=0){}
    console.log('tv is in stock')
}else{
    console.log('sorry out of stock');
}

checkTVinventory(1)

function checkTime(){
if(hour == 24){
    console.log("this is a whole day")
} else {
    console.log(hour * 60)
}
}

checkTime(1);



function discount(itemPrice){
    if(itemprice> 10.00){
        console.log('qualify for 5% discount')
    }
    else if(itemPrice>20.00){
        console.log("you qualify for 10% discount")
    }
}