let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");

let turno=true

 const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if (turno){
            box.innerText="O";
            turno= false;
        }
        else{
            box.innerText="X"
            turno=true;
        }
        box.disabled=true;
        checkwinner();

    });
    const checkwinner = () =>{
        for(let pattern of winpatterns){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText
            let pos3val=boxes[pattern[2]].innerText;


            if (pos1val!="" && pos2val!=""&& pos3val!=""){
                if (pos1val===pos2val&& pos2val===pos3val){
                    console.log("winner",pos1val)
                    break
                }

            }
        }
    }
});

