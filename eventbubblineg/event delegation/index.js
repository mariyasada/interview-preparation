document.querySelector("#category").addEventListener("click",(e)=>{
    console.log(e.target); // it gives the target li
    // but we need id of li and navigates to next page
    if(e.target.tagName==="LI")
    {
    window.location.href="/" + e.target.id;  // so it works we only attach event listner to category which handles all the child events using bubbling concept
    }

    // but there is one mistake, if there is paragraph in list so user clicks on paragraph is also navigates. we have to put consdition that e.target .tag is li then this event propogates.
})