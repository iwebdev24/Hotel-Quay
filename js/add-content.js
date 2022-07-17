let today = new Date();
let hourNow = today.getHours ();
let greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) { 
    greeting = 'Good day!';
} else if (hourNow > 0) {
    greeting = 'Good day!';
} else {
    greeting = 'Hello!';
}

document.write('<h3>' + greeting + '</h3>');