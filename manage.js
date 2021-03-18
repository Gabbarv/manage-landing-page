function validate()
{
  var emailid = document.getElementById("emailid").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(emailid) == false && emailid != ""){
    document.getElementById("lbl").style.visibility="visible";

  }
  else{
    document.getElementById("lbl").style.visibility="hidden";
  }
}
function myFunction() {
  var x = document.getElementById("navit");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
