var ctabutton=document.querySelector(".cta__button").addEventListener("click",veryfy);


function veryfy(){
   
//    document.querySelector(".error").classList.add("opa");
 
    let x = document.getElementById("cta__email").value;
    console.log(x);
    if (x == "") {
        document.querySelector(".error").classList.add("error--opacity1");
      return false;
    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x))
    {
        document.querySelector(".error").classList.remove("error--opacity1");
      return (true)
      
    }
    document.querySelector(".error").classList.add("error--opacity1");
      return (false)
  }
  
