//        ------------------Question_01--------------------
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

 
var a=10;
document.write(`Result: <br>`);
document.write("The value of a is: "+ a +"<br>");
document.write("<b>.......................................</b><br><br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: "+ a + "<br><br>" );
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: "+ a + "<br><br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + a-- + "<br>" );
document.write("Now the value of a is: " + a + "<br><br>" );


//        ------------------Question_02--------------------
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var a = 2;
var b = 1;
// Step 1: --a
// The value of --a is 1.
// Now, a = 1, b = 1

// Step 2: --a - --b
// b becomes 0 (from 1).
// Now, a = 1, b = 0.
// The expression --a - --b is now 1 - 0 = 1.
// So far, a = 1, b = 0.

// Step 3: --a - --b + ++b
// b becomes 1 (from 0).
// Now, a = 1, b = 1.
// The expression --a - --b + ++b is now 1 - 0 + 1 = 2.
// So far, a = 1, b = 1.

// Step 4: --a - --b + ++b + b--
// The expression --a - --b + ++b + b-- is now 1 - 0 + 1 + 1 = 3.
// After this operation, a = 1, b = 0.

var result = --a - --b + ++b + b--;
document.write("a is "+ a + "</br>");
document.write("b is "+ b + "</br>");
document.write("result is " + result +"</br></br>");


//        ------------------Question_03--------------------
// 3. Write a program that takes input a name from user &
// greet the user.

var user_Name = prompt("Enter Your Name :");
document.write("Hi! " +user_Name+ " Good Morning."+"</br>" );


//        ------------------Question_05--------------------
//        --Question 4 is not available so direct move question_05---

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


        // Get the input value, default to 5 if empty
        var num = prompt("Enter number :");
        if (num === "") {
            num = 5; // Default value
        } else {
            num = parseInt(num) || 5;
        }
    
        // Generate the multiplication table
        var output = "<h2>Table of " + num + "</h2>";
        for (var i = 1; i <= 10; i++) {
            output += "<p>" + num + " x " + i + " = " + (num * i) + "</p>";
        }
    
        // Display the table in the browser
        document.write(output);
    


//        ------------------Question_06--------------------

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");
let totalMarks = 100;
let obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
let obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
let obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
let percentagesubject1 = (obtainedMarks1 / totalMarks) * 100 + "%";
let percentagesubject2 = (obtainedMarks2 / totalMarks) * 100 + "%";
let percentagesubject3 = (obtainedMarks3 / totalMarks) * 100 + "%";
let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let totalMaxMarks = totalMarks * 3; 
let percentage = (totalObtainedMarks / totalMaxMarks) * 100;
document.write("<h1>Marksheet</h1>");
document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Marks Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentagesubject1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentagesubject2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentagesubject3 + "</td></tr>");
document.write("<tr><th colspan='3'>Total Obtained Marks</th><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><th colspan='3'>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");




