var valid= true;

function validatereg2()
                {
				
                    if (document.form1.email.value=="")
                    {
                        alert("Email Name is empty");
                        document.form1.email.focus();
                        valid= false;
                    }
                    else if (document.form1.email.value.indexOf('@') <= 0 || document.form1.email.value.indexOf('.com') <= 0)
                    {
                        if(document.form1.email.value=="admin" && document.form1.password.value=="admin")
                           {
                           window.open("admin.html");
                           }
                           else{
                            alert("invalid");
                        document.form1.email.focus();
                        valid=false;
                           }
                    }
                    else if (document.form1.password.value=="")
                    {
                        alert("Password is empty");
                        document.form1.password.focus();
                        valid= false;
                    }
                    else if (document.form1.password.value.length < 8)
                    {
                         alert("password must be longer than 4 numbers");
                         document.form1.password.focus();
                         valid=false;
                    }
                    else
                    {
                    valid= true;
                    }
					
					if(valid==true)
                    {
                    
					window.open("index.html");

                    }
	
                }

function validatereg()
                {
				
                    if (document.reform.firstname.value=="")
                    {
                        alert("First Name is empty");
                        document.reform.firstname.focus();
                        valid = false;

                    }
                    else if (document.reform.lastname.value=="")
                    {
                        alert("Last Name is empty");
                        document.reform.lastname.focus();
                        valid= false;
                    }
                    else if (document.reform.email.value=="")
                    {
                        alert("Email Name is empty");
                        document.reform.email.focus();
                        valid= false;
                    }
                    else if (document.reform.email.value.indexOf('@') <= 0 || document.reform.email.value.indexOf('.com') <= 0)
                    {
                        alert("invalid");
                        document.reform.email.focus();
                        valid=false;
                    }
                    else if (document.reform.password.value=="")
                    {
                        alert("Password is empty");
                        document.reform.password.focus();
                        valid= false;
                    }
                    else if (document.reform.password.value.length < 8)
                    {
                         alert("password must be longer than 4 numbers");
                         document.reform.password.focus();
                         valid=false;
                    }
                    else
                    {
                    valid= true;
                    }
					
					if(valid==true)
                    {
                    
					window.open("index.html");

                    }
	
                }



document.getElementById("login").onclick = function(){
    
    document.getElementById("form").style.display=("block");
    document.getElementById("form2").style.display=("none");
    
}
document.getElementById("register").onclick = function(){
    
    document.getElementById("form2").style.display=("block");
    document.getElementById("form").style.display=("none");
}
