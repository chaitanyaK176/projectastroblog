var images=document.getElementsByClassName("a")
for(i=1;i<=images.length;i++)
{
    images[i-1].setAttribute("src","../Asst/images/planets/"+i+".jpeg")
    images[i-1].style.width="220px"
    images[i-1].style.height="220px"

}
console.log(images)
//this is for header
    var indval=0;
    var imagesarr=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg"]
    function inc()
    {
        indval++;
        if(indval>=imagesarr.length)
        {
            indval=0;
        
        document.getElementById("header").style.backgroundImage="url(../Asst/images/planets/"+imagesarr[indval]+")"
    }
    else{
        document.getElementById("header").style.backgroundImage="url(../Asst/images/planets/"+imagesarr[indval]+")"
    }
}
    function dec()
    {
        indval--;
        if(indval<0)
        {
            indval=imagesarr;
            document.getElementById("header").style.backgroundImage="url(../Asst/images/planets/"+imagesarr[indval]+")"
        }
        else{
            document.getElementById("header").style.backgroundImage="url(../Asst/images/planets/"+imagesarr[indval]+")"
        }
        
    }
    function openImg(pic,name,info){
        document.getElementById("subWindow").removeAttribute("style")
        document.getElementById("subWindowImg").src='../Asst/images/planets/'+pic+".jpeg"
        document.getElementById("imageHeading").innerHTML=name;
        document.getElementById("imgpara").innerHTML=info;
    }
    function closeImg(){
        document.getElementById("subWindow").setAttribute("style","display:none;")
    }