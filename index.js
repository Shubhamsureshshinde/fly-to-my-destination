
// in this array the length of the array is number of airports and the elements are the fuel units
const Array = [1, 6, 3, 4, 5, 0, 0, 0, 6];


function findMinPlanes(array) {

    // for starting the journey wil need to start with atleast one unit of fuel 
    let currentFuel = 1;
    let minPlanes = 0;
    let i = 0;

    // finding the maximum number of fuel 
    while (currentFuel > 0 && i < array.length) {
        currentFuel = array[i];
        let maxFuelIndex = i;

        for (let j = i + 1; j <= i + currentFuel && j < array.length; j++) {
            if (array[j] > array[maxFuelIndex]) {
                maxFuelIndex = j;
            }
        }
        // if we didnt found airport with max fuel units we can't continue
        if (maxFuelIndex === i) {
            return -1;
        }


        // Fly to the chosen airport
        currentFuel = currentFuel - (maxFuelIndex - i);
        i = maxFuelIndex;
        minPlanes++;
    }

    // Check if we made it to the end
    if (i === array.length - 1) {
        return minPlanes;
    } else {
        return -1;
    }
}

console.log(findMinPlanes(Array));

