function validate()
{
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var name=/^[a-zA-Z]{2,15}$/
if(!name.test(fname) || !name.test(lname))
{
alert("Enter the Name correctly");
return;
}	

var age = document.getElementById("age").value;
var ag=/^(0?[1-9]|[1-9][0-9]|[1][0-1][0-9])$/
if(!ag.test(age))
{
alert("Age cannot be "+age+"!!\n Enter Numeric values only!!");
return; 
}

var bgroup = document.getElementById("bgroup").value;
var bg= /^([aboABO]|(ab)|(AB)|(Ab)|(aB))[\-\+]{1}$/
if(!bg.test(bgroup) || !bgroup )
{
 alert("Enter the blood group correctly");
 return;
}

var no = document.getElementById("no").value;
var no1=/^([0](0-9){10})|(([\+][0-9]{2})?[6-9](\d){9})$/
if(!no || !no1.test(no))
{
alert("Phone no cannot be "+no+"!!\n Enter Correct Phone no!!");
return; 
}

var email = document.getElementById("email").value;
var em= /^([a-zA-Z][a-zA-Z0-9\-\_\.]{2,20}[a-zA-Z]?)@([a-z0-9]{2,10}\.){1,4}[a-zA-Z0-9]{2,10}$/
if(!em.test(email))
{
 alert("Enter the email correctly");
 return;
}


var address = document.getElementById("address").value;
var add = /^[a-zA-Z0-9][a-zA-Z0-9\.\-\_\,\ \/]{4,50}$/
if(!add.test(address))
{
 alert("Enter the Address correctly");
 return;
}

          
alert("You are registered");
}
