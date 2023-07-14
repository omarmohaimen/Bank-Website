var x = 0;

setInterval(function(){
    "use strict"
    
    if (x == 0)
        {
            document.getElementById("cont").style.backgroundImage = "url('img2.jpg')";
            x++;
        }
    else if (x == 1)
        {
                document.getElementById("cont").style.backgroundImage = "url('img3.jpg')";
            x++;
        }
         
    else if (x == 2)
        {
                document.getElementById("cont").style.backgroundImage = "url('img4.jpg')";
            x++;
        }
         
    else {if (x == 3)
        {
                document.getElementById("cont").style.backgroundImage = "url('img1.jpg')";
            x = 0;
        }
         }
    
},5000)






document.getElementById("loc").onclick = function()
{
    location.href=("location.html")
};

document.getElementById("online").onclick = function()
{
    location.href=("online.html")
};

document.getElementById("about").onclick = function()
{
    location.href=("about-us.html")
};
document.getElementById("logout").onclick = function()
{
    location.href=("login.html")
};













