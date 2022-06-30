// the function calling itself within a function is called recursive function
// must have condition to stop calling itself. otherwise it calls infinitely

//write a recursive function to print 1 t0 10.

function recusrsion(num)
{
   console.log(num);
   const newNumber=num +1;
   if(newNumber <=10)
   {
    recusrsion(newNumber)
   }
}
recusrsion(1);

//another example is factorial program

function factorial(number)
{
    if(number>=0)
    {
      if(number===0)
    {
        return 1;
    }
    else{
        return number * factorial(number-1);
    }
    }
    
}
factorial(4);
