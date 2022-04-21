// Create one function with zero parameter having a console statement;

function zerop (){
    console.log("this is zero parameter");
  }
  zerop()
  
  // Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
  
  function sum (a,b){
    console.log(`Sum of ${a}and${b} is ${a+b}`);
  }
  
  // Create one arrow function:
  
  const arrowf = () =>{
    console.log("this is arrow function")
  }
  arrowf();
  
  // printing output:
  
  var x = 21;
  function output () {
      console.log(x);
      var x = 20;
  };
  output ();
  
  //the output of this function is undefined
  
  // "Printing the output: 
  var x = 70;
  output1 ();
  console.log(x)
  function output1() {
      console.log(x);
      var x = 20;
  };
  //Output is 70 printed
  
  // Print output
  
  var x = 21;
  out1();
  out2();
  console.log(out1);
  out1 = function() {
      
     x = 50;
    console.log(x);
  };
  out2 = function() {
      x = 10;
     console.log(x);
  };
  
  // Output is Uncaught Reference Error
  
  // Write a function that accepts parameter n and returns factorial of n
  
  let factorial = (n) =>{
    let fact = 1;
    for(let i=2; i<=n; i++)
    {
        if (n==0){
            fact=1;
            break;
        }
        fact =fact*i;
    }
    console.log("the factorial of " + n + "is:" + fact);
  }
  factorial(10);
//   output is 10 factorial