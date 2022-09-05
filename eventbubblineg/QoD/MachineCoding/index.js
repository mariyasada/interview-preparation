//Make a star rating component in vanilla JS
// what we gonna do is we make the start rating by all javascript, creating div also dynamically
// we create a function which takes a div id and the start(how many starts you want)
const para=document.querySelector(".para");
console.log(para.dataset.animalType);

const ShowStarts=(parentDiv,count)=>{
    const parentElem=document.querySelector(parentDiv);
    const fragment=new DocumentFragment(); // compose a DOM nodes and update them to active DOM tree
    // lightwaigh version of document we can do like this also let fragment=document.createDocumentFragment();
    let lastActive=-1; // last start
    for(let i=1;i<=count;i++)
    {
        const iElement=document.createElement("i"); // i is used for icons
        iElement.classList.add("fa");
        iElement.classList.add("fa-star-o");
        iElement.dataset.starValue=i;
        fragment.appendChild(iElement);
    }
    parentElem.appendChild(fragment);
    parentElem.addEventListener("mouseover", (e)=>{
        const rating=e.target.dataset.starValue;
        console.log(rating);
        if(!rating) return;
        fillStar(rating);
    });

    parentElem.addEventListener("click",(e)=>{
   const ratingVal=e.target.dataset.starValue;
   lastActive=ratingVal;
   fillStar(lastActive);
    })
    
    parentElem.addEventListener("mouseleave",()=>{
        fillStar(lastActive);
    })


    function fillStar(value){
        for(let i=0;i<count;i++) // i=1 tha tab wo second start ko fill kar raha tha 1st wala nahi kar raha tha
        {
            if(i<value)
            {
                parentElem.children[i].classList.add("fa-star");
            }
            else{
                parentElem.children[i].classList.remove("fa-star");
            }
        }
    }
}

ShowStarts("#star",5);