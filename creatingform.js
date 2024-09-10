var list1=[];
var list2=[];
var list3=[];
var list4=[];
var n=1;
var x=0;
function AddRow(){
    var AddRow=document.getElementById("but");
    var NewRow=AddRow.inserRow(n);
    list1[x]=document.getElementById("fname").value;
    list2[x]=document.getElementById("age").value;

    list3[x]=document.getElementById("gender").value;

    list4[x]=document.getElementById("city").value;
    

    var cel1=NewRow.insertCell(0);
    var cel1=NewRow.insertCell(1);
    var cel1=NewRow.insertCell(2);
    var cel1=NewRow.insertCell(3);



    cel1.innerHTML=lis1t[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];
    n++;
    x++;


      

}