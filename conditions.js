//      if and else if 

//🧠 Important Engineering Concept

//Consider:

const age = 20;

if (age >= 18) {
    console.log("Adult");
}

if (age >= 13) {
    console.log("Teenager");
}

//Both conditions are checked independently.

//Output:

Adult
Teenager

//But with:

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
}

//only one branch executes.

//Output:

//Adult

//That's an important difference.