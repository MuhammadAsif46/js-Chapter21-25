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

// var num1 = "472";
// var num2 = 472 ;
// document.write("Value : "+ num1 + "<br>" + "Type : "+ typeof(num1) + "<br>"   );
// document.write("Value : "+ num2 + "<br>" + "Type : " + typeof(num2)  );


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



//*************** Take input from user and show special symbol not allowed ***************/

// var input = prompt("Enter a user name");
// for (var i = 0; i < input.length; i++) {
//   if (
//     input.charCodeAt(i) === 33 ||
//     input.charCodeAt(i) === 64 ||
//     input.charCodeAt(i) === 46 ||
//     input.charCodeAt(i) === 44
//   ) {
//     alert("Please enter a valid user name");
//     break;
//   }
// }



//*************** Take input from user and show item is found or not ***************/

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter what do you want");
// var userInpCase = userInput.toLowerCase();
// var found = false;
// for(var i = 0; i < arr.length; i++){
//     if(userInpCase === arr[i]){
//         found = true;
//         alert(userInpCase + " : is available at index " + i);
//     }
// }
// if(!found){
//     alert("sorry "+ userInpCase + " : is not available");
// }


//*************** Converts the string to an array ***************/

// var university = "University of Karachi";

// var b = university.split("");
// for (var i = 0 ; i < b.length; i++){
//     document.write(b[i] + "<br>")
// }


//*************** Take input from user and show last character of input ***************/

// var user = prompt("enter a name.");
// var lastChar = user.charAt(user.length - 1);

// document.write("User Input : " + user + "<br>");
// document.write("Last character of input is : " + lastChar);