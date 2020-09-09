const constantes ={
  nosotros: 
  "Somos una librería comercial y familiar con mas de 35 años de experiencia. Venta mayorista y minorista",
  
  tituloServicios1:
  "ARTICULOS DE ESCRITORIO Y OFICINAS",
  descServicios1: 
  "Amplia gama de articulos para ofiicnas, elementos de escritura. Trabajamos primeras y segundas marcas, originales y alternativos. insumos para impresoras fiscales",
  
  tituloServicios2:
  "SERVICIOS DE SELLOS Y DOCUMENTACION",
  descServicios2:
  "Taller de sello propios. ANillados y duplicaciones de docuemtnos",
  
  tituloServicios3:
  "SERVICIOS ESPECIALES",
  descServicios3:
  "Tramites IGJ, rubrica copiado y venta de libros comerciales, copias autenticadas por escribano",

  tituloServicios4:
  "EMBALAJE; SOBRES CINTAS Y PEGAMENTO",
  descServicios4:
  "Linea completo de articulos para embalaje. Sobres, cajas, Pegamentos vinilicos ",

}


//WPP FUNCTION
$(function () {
  $('#WAButton').floatingWhatsApp({
    phone: '5491165106333', //WhatsApp Business phone number
     //headerTitle: 'Escribinos!', //Popup Title
    popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
    showPopup: true, //Enables popup display
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



