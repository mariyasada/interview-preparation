////LocalStorage wrapper with expiration
// myLocalStorage.setItem('roc8', '42', 1000);
// myLocalStorage.getItem('roc8'); // 42
// After 1 sec
// myLocalStorage.getItem('roc8'); // null

//YE PEHLE KIYA THA
// const mylocalstorage=(key,value,timer)=>{
//         localStorage.setItem(key,value);
//         setTimeout(()=>{
//          localStorage.removeItem(key)
//         },timer)
// }
// mylocalstorage("roc8","42",4000);

// RIGHT SOLUTION YE HAI
const  myLocalStorage={
    SetItem:function(key,value,timer){
        localStorage.setItem(key,value);
        setTimeout(()=>{
            localStorage.removeItem(key)
        },timer);
    },
    GetItem:function(key){
        var localsroreItem=localStorage.getItem(key);
        return localsroreItem;
    }
}
myLocalStorage.SetItem("roc8",42,4000);
myLocalStorage.GetItem("roc8");


// REMOVE DUPLICATE ELEMENTS IN  ARRAY USING MAP

// const removeDuplicate=(arr)=>{
//      let map=new Map();
//      let newArr=[];
//      for(let i=0;i<arr.length;i++)
//      {
//         if(map.get(arr[i]==null))
//         {
//           newArr.push(arr[i])
//         map.set(arr[i]);
//         }
//      }
// }
// removeDuplicate([1,2,5,3,4,2,7,2,1])