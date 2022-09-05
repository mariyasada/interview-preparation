const outputEl=document.querySelector(".output");
const inputEle=document.querySelector(".inputDate");
 let valueOfInput;

inputEle.addEventListener("change",()=>{
     valueOfInput=inputEle.value;
// slicing date and time from user input
    const slicingDate=valueOfInput.slice(0,10);
    const slicingTime=valueOfInput.slice(11);
    const output=reversedStr(slicingDate);

    console.log(output,slicingTime);
    const timestamp=new Date(`${slicingDate}`).getTime();
    const selectedHours=new Date(`${slicingDate}`).getMinutes();
    console.log(timestamp);

    const todaysDate=new Date().getTime();
    const todaysSeconds=new Date().getMinutes();
    const difference=todaysDate-timestamp;
    console.log(difference);

    // To calculate the no. of days between two dates
    let Difference_In_Days =Math.floor((difference / (1000 * 3600 * 24)));  
    let diffrence_minutes=Math.floor((difference / (1000 * 3600 * 24))+1);
    console.log(diffrence_minutes);  
    outputEl.innerText=`last seen ${Difference_In_Days} days ago`;
})

function reversedStr(str)
{
    let output="";
    const reversedStr=str.split("-");
    for(let i=reversedStr.length-1;i>=0;i--) 
    {
        if(i === 0 )
        {
            output += reversedStr[i];
        }
        else{
        output += reversedStr[i] +"/";
        }

    }
     return output;
}