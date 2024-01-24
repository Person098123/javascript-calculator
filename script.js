

function equalTo(){
  
 let userInput= prompt("Which function would you like?");
 switch(userInput){
 case "add":
  add();
  break;

case "subtract":
  subtract();
  break;

case "multiply":
  multiply();
  break;

case "division":
  division();
  break;

default:
  document.write("error: try doing add, substract, multiply, or division");
  
}
}

function add(){
 let input1= parseInt(prompt("Whats the first input"));
 let input2= parseInt(prompt("Whats the second input"));
 let output=0;

 output= (input1+input2);
 document.write(output);
}

function subtract(){
  let input1= parseInt(prompt("Whats the first input"));
  let input2= parseInt(prompt("Whats the second input"));
    let output=0;

    output= (input1-input2);
    document.write(output);
    
}

function multiply(){
  let input1= parseInt(prompt("Whats the first input"));
  let input2= parseInt(prompt("Whats the second input"));
    let output=0;

    output= (input1*input2);
    document.write(output);
}

function division(){
  let input1= parseInt(prompt("Whats the first input"));
  let input2= parseInt(prompt("Whats the second input"));
    let output=0;

    output= (input1/input2);
    document.write(output);
}