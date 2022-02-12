//get the number to check from the user
const number = parseInt(prompt('Enter your number: ' ));

const checkNumber= number=>{
let n=0, m=1, nextNumber;
do{
nextNumber=n+m;
console.log(nextNumber);// 
    if(nextNumber==number){
    alert("the number is part of the fibanocci sequence");
       break;
     }
    else{
        n=m;
        m=nextNumber;
        }
    } while(nextNumber<=number);
}

checkNumber(number);