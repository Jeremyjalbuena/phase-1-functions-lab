// Code your solution in this file!
 function distanceFromHqInBlocks(someValue){
    if(someValue<42){
        return(42-someValue);
    }
    else{
        return(someValue-42);
    }
}

function distanceFromHqInFeet(someValue){
   return distanceFromHqInBlocks(someValue)*264;
   // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
    

}
function distanceTravelledInFeet(start,destination){
if(start>destination){
    return((start-destination)*264);
}else{
    return((destination-start)*264);
}


}
//returns the number of feet traveled

function calculatesFarePrice(start,destination){
    //returns the fare for the customer
    let farePrice= distanceTravelledInFeet(start,destination);
  if (farePrice<= 400){
    return 0;
  }
  if (farePrice>=400 && farePrice<=2000){
    return (farePrice-400)* 0.02;
  }
  else if(farePrice>=2000&& farePrice<=2500){
    return 25;
  }
  else if (farePrice > 2500){
    return "cannot travel that far";
  }
}
