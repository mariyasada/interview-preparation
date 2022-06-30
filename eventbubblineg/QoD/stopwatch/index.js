const seconds=document.querySelector("#seconds");
const tens=document.querySelector("#tens");
const StartBtn=document.querySelector("#start");
const StopBtn=document.querySelector("#stop");
const resetBtn=document.querySelector("#reset");

var milisecondvalue=00;
var secondsValue=00;
var intervalId;

 

StartBtn.addEventListener("click",()=>{
        clearInterval(intervalId);
     intervalId=setInterval(()=>{
         milisecondvalue++;
         if(milisecondvalue < 10)
         {
                tens.innerHTML="0"+ milisecondvalue;
         }
         if(milisecondvalue >9) {
               tens.innerHTML= milisecondvalue ;
         }
         if(milisecondvalue > 59)
         {
                secondsValue++;
                seconds.innerHTML= "0"+secondsValue;
                milisecondvalue=0;
                tens.innerHTML="0"+ 0;
         }
         if (secondsValue > 9){
 	 	seconds.innerHTML =secondsValue;

 	 }
   },500);      
})
StopBtn.addEventListener("click",()=>{
         clearInterval(intervalId);
})
resetBtn.addEventListener("click",()=>{
        milisecondvalue="00";
        secondsValue="00";
        tens.innerHTML=milisecondvalue;
        seconds.innerHTML=secondsValue;
})
