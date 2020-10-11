const constantes ={
  nosotros: 
  "Somos una librería comercial y familiar con mas de 35 años de experiencia. Venta mayorista y minorista",
  
  tituloServicios1:
  "ARTICULOS DE ESCRITORIO Y OFICINAS",
  descServicios1: 
  "Amplia gama de articulos para oficinas, elementos de escritura. Trabajamos primeras y segundas marcas, originales y alternativos. insumos para impresoras fiscales",
  
  tituloServicios2:
  "SERVICIOS DE SELLOS Y DOCUMENTACION",
  descServicios2:
  "Taller de sello propios. Anillados y duplicaciones de documentos",
  
  tituloServicios3:
  "SERVICIOS ESPECIALES",
  descServicios3:
  "Tramites IGJ, rubrica, copiado y venta de libros comerciales, copias autenticadas por escribano",

  tituloServicios4:
  "EMBALAJE; SOBRES CINTAS Y PEGAMENTO",
  descServicios4:
  "Linea completo de articulos para embalaje para encomiendas. Sobres, cajas y pegamentos vinilicos ",

  tituloServicios5:
  "IMPRESORAS Y CARTUCHOS",
  descServicios5:
  "Primeras marcas: Borther, epson y HP y linea ecnonómica. Impresoras y venta de Cartuchos / Toners",

}


//WPP FUNCTION
$(function () {
  $('#WAButton').floatingWhatsApp({
    phone: '5491123615225', //WhatsApp Business phone number
     //headerTitle: 'Escribinos!', //Popup Title
   // popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
    //showPopup: true, //Enables popup display
    buttonImage: '<img src="images/whatsappModern.png" />', //Button Image
    //headerColor: 'crimson', //Custom header color
    backgroundColor: 'crimson', //Custom background button color
    position: "right" //Position: left | right

  });
})
// FUNCTION

function inserstartextos(id,element){
  document.getElementById(id).innerHTML=element;
}


inserstartextos("Nosotros",         constantes.nosotros);
inserstartextos("tituloServicios1", constantes.tituloServicios1);
inserstartextos("descServicios1",   constantes.descServicios1);
inserstartextos("tituloServicios2", constantes.tituloServicios2);
inserstartextos("descServicios2",   constantes.descServicios2);
inserstartextos("tituloServicios3", constantes.tituloServicios3);
inserstartextos("descServicios3",   constantes.descServicios3);
inserstartextos("tituloServicios4", constantes.tituloServicios4);
inserstartextos("descServicios4",   constantes.descServicios4);
inserstartextos("tituloServicios5", constantes.tituloServicios5);
inserstartextos("descServicios5",   constantes.descServicios5);



///////////////////////FORM DE GITHUB

(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();


