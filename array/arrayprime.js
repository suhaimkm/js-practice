let primearray =[];
let n = 997;
let prime = true;
for (i = 2; i < n; i++) {
    if (n%i == 0) {
        prime = false;
        break;
        
      
    }
   }
if(prime==false){
    prime.push(n + " is not a prime number");
}else if(prime==true){
    prime.push(n + " is a prime number");
}
console.log(primearray);