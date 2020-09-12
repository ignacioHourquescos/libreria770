

//document.getElementById("login").addEventListener("click", redireccionarAPanel(password));



function redireccionarAPanel(){
     var password=document.getElementById("password").value;
    if (password=="770"){
    alert("corecto");

    window.location.replace("http://www.w3schools.com");
    }else{
        alert("Password incorrecto")
        return false;
    }
}


// function redireccionarAPanel(){
//     //alert("algo de todo esto funciona");

//     if (password=="770"){
//       location.replace("ofertasData.html");
//   }else{
//       alert("Password incorrecto")
//   }
   
// }