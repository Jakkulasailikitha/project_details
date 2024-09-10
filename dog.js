let apple=document.getElementById("night");
console.log(apple)
let text=document.getElementById("text")
let images=["https://images.unsplash.com/photo-1595064085577-7c2ef98ec311?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFybHklMjBtb3JuaW5nfGVufDB8fDB8fHww","https://cdn.pixabay.com/photo/2021/11/01/22/10/night-6761907_640.jpg"];
let index=0;


function morning(){
    index=(index+1)%images.length;
    apple.src=images[index];
    
    if(text.textContent==="Morning"){
        text.textContent="night";
    }
    else if(text.textContent==="night"){
        text.textContent = "Morning";
    }

}