const timerID=setInterval(()=>{
    todaysDate=new Date();
    let hours=todaysDate.getHours();
    let minutes=todaysDate.getMinutes();
    let seconds=todaysDate.getSeconds();
    let period="AM";
    if(hours===0)
    {
        hours=12;
    }
    else if(hours>=12)
    {
        hours=hours-12;
        period="PM";
    }
    hours =  hours < 10 ?  "0" + hours : hours;
    minutes = minutes < 10 ? "0"+ minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector("#clock").innerText=`${hours}:${minutes}:${seconds}:${period}`;

},1000);