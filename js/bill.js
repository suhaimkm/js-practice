let item1 = 550
let item2 = 1000
deliverycharge = 50
let membership = false;
if (membership == true) {
    deliverycharge = 0;
    console.log("delivery charge is free");
} else {
    deliverycharge = 50;
    console.log("delivery charge is 50")
}
console.log("====bill===============")

totalcost = item1 + item2 + deliverycharge;
console.log("total cost is " + totalcost);