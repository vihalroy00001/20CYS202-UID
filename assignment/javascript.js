function myFunction() 
{
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Id") {
        x.innerHTML = "Your Team Id is 101";
    } 
    else 
    {
        x.innerHTML = "Id";
    }
}

function NameCheck() 
{
    var x = document.getElementById("fname").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) 
    {
        if (y.includes(sp[i])) 
        {
            alert("Please Remove special characters")
        }
    }
}

function LNameCheck() 
{
    var x = document.getElementById("lname").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) 
    {
        if (y.includes(sp[i])) 
        {
            alert("Please Remove special characters")
        }
    }
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function countrycheck() 
{
    var x = document.getElementById("country").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) 
    {
        if (y.includes(sp[i])) 
        {
            alert("Please Remove special characters")
        }
    }
}