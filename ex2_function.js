//Declations Function
function evenNumber(number){
    number = number%2;

    if(number == 0){
        console.log("This Number is even");
    }
    else{
        console.log('This Number is odd');
    }
}
evenNumber()

//Expression Functions
const checkNumber = function(testNumber){
    testNumber = testNumber % 2;
    if(testNumber == 0){
        console.log('Number is even');
    }
    else{
        console.log('Number is odd');
    }
}
checkNumber()

//Arrow Functions
const checkNumberArrow = (testNumberArrow) => {
    testNumberArrow = testNumberArrow % 2;
    if(testNumberArrow == 0){
        console.log('Number is even');
    }
    else{
        console.log('Number is odd');
    }
}
checkNumberArrow(4)