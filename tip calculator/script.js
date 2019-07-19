function calculateTip()
{
    //store the inputs 
    var billamount=document.getElementById("bill-amount").value;
    var serviceQuality=document.getElementById("service-quality").value;
    var numpeople=document.getElementById("total-people").value;

    //quick validation
    if(numpeople === "" || serviceQuality === 0)
    {
        window.alert("please enter some values to thi baby up and running");
    }
    if(numpeople==="" || numpeople<=1 )
    {
        numpeople=1;
        document.getElementById("each").style.display = "none";
    }
    else
    {
        document.getElementById("each").style.display="block";

    }
    //doing some math
    var totalamount=(billamount*serviceQuality)/numpeople;
    totalamount=Math.round(totalamount*100)/100;
    totalamount=totalamount.toFixed(2);


    //diplay the tip
    document.getElementById("total-tip").style.display="block";
    document.getElementById("tip").innerHTML=totalamount;

}

document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";

//click event handling
document.getElementById("calculate").onclick=function(){
    calculateTip();
}