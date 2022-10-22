let num=9;
let count=0;
for(let i=1; i<=num/2; i++){
    if(num%i==0){
        count++;
    }
}
if(count==1){
console.log(num,"is prime");
}
else{
console.log(num,"is not prime");
}
