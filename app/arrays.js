// 1. Given an array, move the element at index 0 to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
    let elem = arr.shift();
    arr.push(elem)
    return arr;
}


// ------------------------------------------


// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42

function largestNum(arr) {
    let largest = arr[0];
    let count = 1;
    for (let x = 1; x < arr.length; x++) {
        if (arr[x] > largest) {
            largest = arr[x];
        }
        else if (arr[x] == largest) {
            count++;
        }
    }
    if (count >= 2) {
        var obj = {}
        obj[largest] = count;
        return obj;
    }
    else {
        return largest;
    }
}

// ------------------------------------------


// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
    let newarr = [];
    for (x = 0; x < arr.length; x++) {
        let y = arr[x] * arr.length;
        newarr.push(y);
    }
    return newarr;
}


// ------------------------------------------


// 4. Given a multidimensional array, return a single dimension array with all of the primitive data elements within the multidimensional array.
// Example:
// input:  [[['legume'], 3, []], 2, ['tree', [{}, [5]]]]
// output: ['legume', 3, 2, 'tree', 5]
// Primitive data types - https://developer.mozilla.org/en-US/docs/Glossary/Primitive

function arrayFlattener(arr) {
    let newArray = arr.flat(Infinity);
    let finalArray = [];
    for (x = 0; x < newArray.length; x++) {
        if ((newArray[x] != 0) && (typeof newArray[x] != "object")) {
            finalArray.push(newArray[x]);
        }
    }
    console.log(finalArray)
    return finalArray;
}
// ------------------------------------------


//5. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
    from: 'BOI',
    to: 'LAX',
    prices: {
        standard: 500,
        firstClass: 2200
    }
}, {
    from: 'BOI',
    to: 'SEA',
    prices: {
        standard: 800,
        firstClass: 1200
    }
}, {
    from: 'BOI',
    to: 'CAN',
    prices: {
        standard: 750,
        firstClass: 6200
    }
}]


function flightCost(destination, firstClass) {
    //***hint: use the find method***
    if (firstClass) {
        let x = flights.find(flight => flight.to.toLowerCase() == destination.toLowerCase());
        return x.prices.firstClass;
    }
    else {
        let x = flights.find(flight => flight.to.toLowerCase() == destination.toLowerCase());
        return x.prices.standard;
    }
}


// ------------------------------------------


// 6. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." } 


let staff = [{ id: 1, name: 'Jon' }, { id: 2, name: 'Yuli' }, { id: 21, name: 'Peter' },
{ id: 17, name: 'St. MaryLou de la Playa Carmen' }, { id: 51, name: 'Doug' },
{ id: 881, name: 'Paul' }, { id: 0, name: 'Jon' }, { id: 999, name: 'Timma' }]

function findById(num) {
    let result = staff.find(person => person.id == num);
    let object = { error: "No user with that id." };
    if (!result) {
        return object;
    } else {
        return result;
    }
}



// ------------------------------------------


// 7. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
    homeCity: "Birmingham",
    members: [{
        name: 'Johnny P',
        instrument: 'sax'
    }, {
        name: 'River',
        instrument: 'drums'
    }, {
        name: 'Kris',
        instrument: 'guitar'
    }]
}

function bandMemberDetails(id) {
    for (let x = 0; x < theBand.members.length; x++) {
        if (theBand.members[x].name == id) {
            return `${id} is in the band and plays the ${theBand.members[x].instrument}`
        }
    }
}