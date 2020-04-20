function bonAppetit(bill, k, b) {
  let total= 0;
  for (let i =0; i < bill.length; i++){
    total += bill[i];
  }
  let splitPortions = total - bill[k];
  // even eatings 
  let divByTwo = splitPortions/2;
  //dividing cost of shared meals
  if (divByTwo === b){
    console.log('Bon Appetit');
  } else {
    let diff = b - divByTwo;
    console.log(diff)
  }
}

const ar= [72,53,60,66,90,62,12,31,36,94];
const onlyBrians = 6;
const brainsCharge =  288;
bonAppetit(ar,onlyBrians,brainsCharge);


  // bill is array of values for food
    // k is what she did not eat
    // b is what brian is charging her - verify if its correct 

    // console.log(bon Appetit) 
    // if it checks out 

    // else print differnce that brian owes karen in an integer form 

    // solve as human 
    // did brain rip off kara 
    // take total - brians only dish
    // divide by two 
    // if brians change is same bon apple teeth 

    // if there is a difference return that diff 

    // solve as dev 
    //refer to above 