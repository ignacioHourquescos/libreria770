
function agarrarContraseña(){  
    var password=document.getElementById("password").value
    if (password=="770"){
        document.getElementById("formularioLogin").action="./ofertasData.html";
    }else{
        alert("Contraseña incorrecta");
        return false;
    }
}


  