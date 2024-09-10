// let save=document.getElementById("save button");
// let textarea=document.getElementById("message");
// savebutton.onclick= function(){
//     let usertext= textarea.value;
//     localStorage.setItem("usertext",usertext);
//     console.log(usertext);

// }

let save = document.getElementById("savebutton");
let text = document.getElementById("mesage");
save.onclick = function() {
    let userText = mesage.value;
    localStorage.setItem("usertext", userText);
    localStorage.getItem("usertext", userText);
    console.log(userText);
};
