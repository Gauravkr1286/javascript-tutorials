//welcome message
alert("Welcome to WMDD Bubble Tea!. Today's special is Strawberry Green Tea with Jelly, only $5!");

// Get user's tea choice
let teaType = prompt("What type of tea would you like? Type b for Black ($5.50) or g for Green ($6.50)");

// Validate tea choice
if (teaType !== "b" && teaType !== "g") {
    alert("Invalid tea type. Please refresh the page to start again.");
}
else {

    // Set base cost
    let cost = teaType == "b" ? 5.50 : 6.50;

    //  flavor choice
    let flavor = teaType == "b" ? prompt("Choose a flavor: m for Milk or r for Regular") : prompt("Choose a flavor: m for Mango or s for Strawberry");

    // default flavor if invalid
    flavor = flavor == "m" || flavor == "r" || flavor == "s" ? flavor : teaType == "b" ? "m" : "m";

    // asking add-on choice
    let addon = prompt("Add-ons: b for Bubbles, j for Jelly, or n for None");

    // default add-on if invalid
    addon = addon == "b" || addon == "j" || addon == "n" ? addon : "n";

    // Checking for today's special
    if (teaType == "g" && addon == "j") {
        cost = 5.00;
        alert("You've chosen today's special! Enjoy your Strawberry Green Tea with Jelly for $5.00.");
    } else {
        // Add cost for bubbles or jelly
        if (addon == "b" || addon == "j") {
            cost += 2.00;
        }
    }

    // checking loyalty points
    let loyaltyPoints = cost >= 8.00 ? 1 : 0;

    // giving order summary
    alert(`Your order: ${teaType} tea, ${flavor} flavor, ${addon} add-on. Total cost: $${cost.toFixed(2)}. You earned ${loyaltyPoints} loyalty point(s).`);
}