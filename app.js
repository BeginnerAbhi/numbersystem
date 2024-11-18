const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
let primefag="";
for(i=0;i<numbers.length;i++){
    let flag=0;
    for(j=2;j<=numbers[i]/2;j++){
        if(numbers[i]%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        primefag+=numbers[i]+" ";
    }
} 
let primearr=primefag.split(" ");
let primearr1=[];
for(i=0;i<primearr.length;i++){
    if(primearr[i]!=""){
        primearr1.push(primearr[i]);
    }
}
console.log("Prime Numbers: "+primearr1.join(" ")); 
let primemin=primearr1[0];
let primemax=primearr1[0];
for(i=0;i<primearr1.length;i++){
    if(primearr1[i]<primemin){
        primemin=primearr1[i];
    }
    if(primearr1[i]>primemax){
        primemax=primearr1[i];
    }
}
console.log("Minimum Prime Number: "+primemin);
console.log("Maximum Prime Number: "+primemax);