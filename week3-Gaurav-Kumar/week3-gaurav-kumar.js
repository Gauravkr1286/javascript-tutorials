
alert("Welcome to Buger King, Online store!");
let burgerType = prompt("Please choose your burger type-> chicken or beef");

if (burgerType !== "chicken" && burgerType !== "beef") {
  alert("Invalid burger type. Please refresh the page to start again.");

}    else {
  let cost = 8;

      let Cheese = prompt("Would you like to add cheese for $2? (yes/no)");


  if    (Cheese == "yes") {
    cost = cost + 2;
  }
  alert("Your total cost is: $" + cost);
}
