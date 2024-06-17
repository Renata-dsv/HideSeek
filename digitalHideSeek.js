// Define the hide function
function hide(hidingLocation) {
    // Store the hiding location in a local variable
    var hideLocation = hidingLocation;  
    // Define the seek function inside the hide function
    function seek() {
        // Return the hidden location when seek is called
        return hideLocation;
    }

    // Return the seek function
    return seek;
}

// Call hide with a string describing the hiding spot
let startGame = hide("under the bed");

// Log the result of calling startGame, which is the seek function
console.log(startGame());  // Output: "under the bed"

// Attempt to log hideLocation directly
try {
    console.log(hideLocation);  // This will result in an error
} catch (error) {
    console.log("Error:", error.message);  // Output: "Error: hideLocation is not defined"
}

  
