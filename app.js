//************ Take inputs from user and show greet fullName************/

// var first = prompt("Enter a first name .");
// var last = prompt("Enter a last name .");

// var fullName = first + " " +last;
// document.write("Welcome to ! " + fullName);


//************ Take input from user and display length of input ************/

// var mobileModel = prompt("enter your fav mobile model .");

// document.write ("My Favorite Phone Is : " + mobileModel + "<br>");
// document.write ("Length Of Strings : " + mobileModel.length);


//************ Find the index of letter in a variable and display ************/

// var names = "Pakistani";

// document.write("String : " + names + "<br>");
// document.write("Index of 'n' is : " + names.indexOf("n")+"<br>");
// document.write("Index of 'a' fisrt is : " + names.indexOf("a")+"<br>");
// document.write("Index of 'a' last is : " + names.lastIndexOf("a"));


//************ Find the character of index in a variable and display ************/

// var names = "Pakistani";

// document.write("String : " + names + "<br>");
// document.write("Character at index 3 is : " + names.charAt(3)+"<br>");
// document.write("Character at index 6 is : " + names.charAt(6));


//************ Replace the word and display result ************/

// var name1 = "Hyderabad";
// document.write("City :" + name1 + "<br>");
// name1 = name1.replace("Hyder","Islam");
// document.write("After Replacement : " + name1);


//************ Replace all the word and display result ************/

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("String : " + "<br>" + message + "<br>"+ "<br>");
// message = message.replaceAll("and","&");
// document.write("After Replacement : "+"<br>" + message);


//************ Converts a string to a number ************/

// var string = "472";
// document.write("Value : "+ string + "<br>" + "Type : String" + "<br>"   );
// var string1 = Number("472");
// document.write("Value : "+ string1 + "<br>" + "Type : Number"   );


//************ Take input fron user and show string is an capital letter ************/

// var user = prompt("enter a text.");
// document.write("User input : " + user + "<br>")
// document.write("Upper case : " + user.toUpperCase());


//************ Take input fron user and show 1st letter is an capital ************/

// var a = prompt ("enter a text.");

// var b = a.slice(0, 1).toUpperCase();
// var c = a.slice(1).toLowerCase();
// var d = b + c;
// document.write("User Input : " + a + "<br>");
// document.write("Title Case : " + d);



//************ Convert a number to string & remove the dot to display content  ************/

// var num = 35.36 ;

// num = num.toString();
// var num1 = num.slice(0,2);
// var num2 = num.slice(3,5);
// var num3 = num1 + num2
// document.write("Number : " + num + "<br>");
// document.write("Result : " + num3 );


//*************** Converts the string to an array ***************/

// var university = "University of Karachi";

// var b = university.split("");
// for (var i = 0 ; i < b.length; i++){
//     document.write(b[i] + "<br>")
// }