console.log("Error Handling will take place.")

function ETT(a,b){


try{
    mul = a * b;
    console.log("No errors yet");
    console.log(m);
    console.log("Carry on");
}

catch(err){
    console.log("We got an error here.")
    console.log(err)
}
 finally{
    return mul;
 }

}

console.log(ETT(2,3));