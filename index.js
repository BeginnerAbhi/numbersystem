const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
let oddfag="";
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2!=0){
        oddfag+=numbers[i]+" ";
    }
}

let evenfag="";
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2==0)
    {
        evenfag+=numbers[i]+" ";
    }
}
console.log("Odd Numbers: "+oddfag);
console.log("Even Numbers: "+evenfag);