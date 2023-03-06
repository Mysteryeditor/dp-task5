function validate(){
    var uname=document.getElementById("uname").value;
    var pd=document.getElementById("pwd").value;
    var cpd=document.getElementById("cpwd").value;

    if(!uname||!pd||!cpd){
        alert("Field cannot be empty");
        return false;
    }
    else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pd))
    {
        alert("password should have a symbol,lowercase &uppercase");
        return false;
    }
    else if(pd!=cpd){
        alert("paswords doesn't match");
        return false;
    }
    else if(pd==cpd)
    {
        alert("Registered Successfully");
    }
    document.write("USERNAME:"+uname+"<br>");
    document.write("PASSWORD:"+pd);


}