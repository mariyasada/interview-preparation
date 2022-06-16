let counter=0;
let intervalID;


function createsetIntervalPollyfill(){
    // we need two things intervalId, intervalmapobject=>which store unique id of settimeout function
    var intervalID = 0;
    var intervalMap = {};

    function setIntervalPollyfill(callback,delay,...args) {
        if(typeof callback != "function")
        {
            throw new Error("callback should be function")
        }
        var id=intervalID++;

        function repeat(){
        intervalMap[id]=setTimeout(()=>{
            callback(...args);
            if(intervalMap[id])
            {
                repeat();
            }
        },delay)
        console.log(intervalMap[id])
        }
        repeat();
        return id;       
        
    }
    function clearIntervalPolyfill(intervalID){
        clearTimeout(intervalMap[intervalID]);
        delete intervalMap[intervalID];

    }


    return {
        setIntervalPollyfill,
        clearIntervalPolyfill
    }

}
const {
    setIntervalPollyfill,
    clearIntervalPolyfill
} =createsetIntervalPollyfill()


const displayGreeting=(name)=>{
intervalID=setIntervalPollyfill(()=>{
    counter++;
    console.log("hello",name);
    if(counter>=3){
        clearIntervalPolyfill(intervalID);
    }
},1000);
}
displayGreeting("mariya");
