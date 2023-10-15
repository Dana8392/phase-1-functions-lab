// Code your solution in this file!

const hqLocation = 42 ; 
const blockInFeet = 264;

function distanceFromHqInBlocks(pickupLocation) {
  
return Math.abs(hqLocation - pickupLocation);

}

/*const blocks = 43;
const distance = distanceFromHqInBlocks(blocks);

console.log(`Distance from ${blocks}th Street to ${hqBlock}nd Street is ${distanceFromHqInBlocks(blocks)} Blocks away!`)*/


function distanceFromHqInFeet(pickupLocation){
    const block = distanceFromHqInBlocks(pickupLocation);

    return block * blockInFeet;
}

function distanceTravelledInFeet(startBlock,destinationBlock) {

    const distance = Math.abs((startBlock - destinationBlock)*blockInFeet);
    
    return distance;    
} 


function calculatesFarePrice(startBlock,destinationBlock) {

    const distanceInFeet = distanceTravelledInFeet(startBlock,destinationBlock)

    if (distanceInFeet <= 400) {

        return 0;
        
    }

    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    
        return (distanceInFeet - 400)*0.02
        
    }
    
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        
        return 25

    }

        else if (distanceInFeet > 2500) {
        
        return 'cannot travel that far'
        
    }




    
}
