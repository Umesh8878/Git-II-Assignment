let str="naman";
bag="";
for(let i=str.length-1;i<=0;i--){
    bag+=str[i];
}
if(bag==str){
console.log("palindrom");
}
else{
console.log("not palindrom");
}