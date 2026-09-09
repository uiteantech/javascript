console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(null));
console.log(Boolean(undefined));




false
true
false
true
false
false



Boolean("0")      // true
Boolean("false")  // true
Boolean([])       // true
Boolean({})       // true

//This surprises many beginners.

//An empty array is truthy: