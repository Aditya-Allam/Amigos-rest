/*=================menu===============*/
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  /*=============themes=================*
  function initial() {
    var x = document.getElementById("myTheme").value;
    var bc = document.getElementById("navbarNav");
    var fg = document.getElementById("h3");


    if (x == 't2') {
        bc.className = "navbar navbar-expand-lg main-navbar bgcolor1 main-navbar-color ";
        fg.style.color="color2"
    }       
    if (x == 't3') {
        bc.className = "navbar navbar-expand-lg main-navbar bgcolor2 main-navbar-color  ";
    }
    if (x == 't1') {
        bc.className = "navbar navbar-expand-lg main-navbar bg-color main-navbar-color ";
        
    }
    if (x == 't4') {
        bc.className = "navbar navbar-expand-lg main-navbar bgcolor3 main-navbar-color  ";
        
    }
}
/*=======email valid====*/
function checkmail(email)
{
    var email=document.getElementById("un").value;
    const exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(exp.test(email))
    {
        return true;
    }
    else{
        alert('enter valid mail');
        return false;
    }

}