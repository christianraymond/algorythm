
function available(){
 var deal = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
 var newDeal = deal.split(",");
   return newDeal.length;
}
console.log(available());
