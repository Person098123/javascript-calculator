

function equalTo(){
 let userInput= prompt("Which function would you like?");
 if(userInput==="add"){
   add();
   break;
 }
 else if(userInput==="subtract"){
   subtract();
   break;
 }
 else if(userInput==="multiply"){
   multiply();
   break;
 }
 else if(userInput==="division"){
   division();
   break;
 }
 else {
  document.write("Please try again idiot");
  break;
 }
}

function add(){
 let input1= prompt("Whats the first input");
 let input2= prompt("Whats the second input");
 let output=0;

 output= (input1+input2);
 document.write(output);
}

function subtract(){
    let input1= prompt("Whats the first input");
    let input2=prompt("Whats the second input");
    let output=0;

    output= (input1-input2);
    document.write(output);
    
}

function multiply(){
    let input1= prompt("Whats the first input");
    let input2=prompt("Whats the second input");
    let output=0;

    output= (input1*input2);
    document.write(output);
}

function division(){
    let input1= prompt("Whats the first input");
    let input2=prompt("Whats the second input");
    let output=0;

    output= (input1/input2);
    document.write(output);
}