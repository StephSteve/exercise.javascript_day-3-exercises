function isNumber() {
    let userstring = "";
     userString = window.prompt("Please enter a Number");
    if( isNaN(userstring)) {
            throw Error("Must be a number");
    } 

}


function convertToNumber() {
    let  let num = "";
    num = window.prompt("Please enter a Number");
    Number(num);

}