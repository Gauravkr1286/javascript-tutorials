const currentYear = new Date().getFullYear();


const lastName = prompt("Enter your last name:");
const birthYear = prompt("Enter your birth year:");

const ageInYears = currentYear - birthYear;
const approximateAgeInDays = ageInYears * 365;


alert("Hello, " + lastName + "! You are approximately " + ageInYears + " years old, which is about " + approximateAgeInDays + " days.");