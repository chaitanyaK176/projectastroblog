var password="123"
var email="chaithu@gmail.com"
function accesstopage()
{
    var usergivenUSID=document.getElementById("userEmail").value
    var usergivenUSP=document.getElementById("userPass").value
    if(usergivenUSID==email && usergivenUSP==password)
    {
        var fom=document.forms
        fom[0].action="./Html/Blog.html"
        fom[0].elements[2].type="submit"
    }
    else if(usergivenUSID!=email && usergivenUSP==password)
    {
        document.getElementById("status").innerHTML="Email is wrong"
        document.getElementById("emaildiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg,red,purple)"
        document.getElementById("passdiv").style.borderColor="royalblue"
    }
    else if(usergivenUSID==email && usergivenUSP!=password)
    {
        document.getElementById("status").innerHTML="password is wrong"
        document.getElementById("emaildiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(90deg,rgb(255,0,111),red)"
        document.getElementById("passdiv").style.borderColor="red"
    }
    else
    {
        document.getElementById("status").innerHTML="Email password is wrong"
        document.body.style.backgroundImage="linear-gradient(90deg,red,red)"
        document.getElementById("passdiv").style.borderColor="red"
    }
}
function visiblePass()
{
    var fom=document.forms
    fom[0].elements[1].type="text"
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.2s"
    var img=document.images
    img[0].src="./Asst/images/monkey.png"
}
function invisiblePass()
{
    var fom=document.forms
    fom[0].elements[1].type="password"
    var img=document.images
    img[0].src="./Asst/images/closeeyemonkey.jpeg"
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.2s"
}