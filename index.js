var ctabutton=document.querySelector(".btn").addEventListener("click",veryfy);


function veryfy(){
   
//    document.querySelector(".error").classList.add("opa");
 
    let x = document.getElementById("input").value;
    console.log(x);
    if (x == "") {
        document.querySelector(".error").classList.add("opa");
      return false;
    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x))
    {
        document.querySelector(".error").classList.remove("opa");
      return (true)
      
    }
    document.querySelector(".error").classList.add("opa");
      return (false)
  }
  