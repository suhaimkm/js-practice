function table(n){
    for(i=1 ; i<=10 ; i++){
        console.log(n + " x " + i + " = " + n*i);
    }   
}


let multiplication =[5 ,6 ,8 ,11,10];
for(let i=0 ; i<multiplication.length ; i++){
    table(multiplication[i]);
    console.log()
}
