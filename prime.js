let n = 997;
let prime = true;
for (i = 2; i < n; i++) {
    if (n%i == 0) {
        prime = false;
        break;
        
      
    }
   }
if(prime==false){
    console.log(n + " is not a prime number");
}else if(prime==true){
    console.log(n + " is a prime number");
}

