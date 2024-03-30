function addNewWEField(){


    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here")
    let weOb=document.getElementById("we");
    let weAddButtonob=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButton);

}
function addNewAQField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here")
    let aqOb=document.getElementById("aq");
    let aqAddButtonob=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButton);

}

// generating cv

function generateCV(){

    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;

    //contact
    document.getElementById("contacT").innerHTML=document.getElementById("contactField").value;
    

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    document.getElementById("instagramT").innerHTML=document.getElementById("inField").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("liField").value;
    
    
    //Objective
    
    document.getElementById("objectiveT").innerHTML=document.getElementById("ObjectiveField").value;

    //we

    let wes=document.getElementsByClassName('weField')

    let str=''



    for(let e of wes)
    {
        str = str+ `<li> ${e.value} </li>`;

    }
    document.getElementById("weT").innerHTML=str;

    //academic qualification

    let aqs=document.getElementsByClassName('eqField')

    let str1=''

    for(let e of aqs) 
    {
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    //code for setting image

    let file=document.getElementById("imgField").files[0];

    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);


    //set the image to template

    reader.onloadend = function() {
        document.getElementById("imgTemplate").src = reader.result;


    }
    
   
    document.getElementById("cv-form").style.dsiplay='none';
    document.getElementById("cv-template").style.display="block";

}

//printing CV

function printCV() {
    window.print();
}