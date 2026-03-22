// Add / Remove
arr.push(10);     // end me add
arr.pop();        // end se remove
arr.unshift(5);   // start me add
arr.shift();      // start se remove

// Loop helpers
arr.forEach(x => console.log(x));

// Transform
arr.map(x => x * 2);

// Filter
arr.filter(x => x > 5);

// Reduce (sum etc)
arr.reduce((sum, x) => sum + x, 0);

// Find
arr.find(x => x === 5);

// Includes
arr.includes(10);

// Index
arr.indexOf(10);

// Sort
arr.sort((a, b) => a - b); // ascending

// Reverse
arr.reverse();