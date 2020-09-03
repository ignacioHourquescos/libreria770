let faqs =[
  "Margenes del negocio",
  "La prinicpal difernecia entre un aceite sintetico y seasdsadsadmisintetico radica en los copenente sde fabricacion", 
  
  "Stock inicial",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu",
  
  "Ubicacion del negocio",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu",

  "Equipamiento para la abertura",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu",

  "Todos los aceites son iguales?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu",
  
  "Primeras y segundas marcas",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu",

  "Bidon vs tambor",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu",

  
  "Productos compelementarios",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu",

  "Diseño de un lubricentro",
  "Oil control",

  "Que tipo de vehiculos ?",
  "Oil control",

  "Que dimnesiones necesito?",
  "Oil control",

  "Comunicacion y marketing",
  "Oil control",

  "Versatilidad y adaptabilidad?",
  "",
  
  "Marca que se trabajan",
  "2 o3 empresas de lubricnates",

  "Marca que se trabajan",
  "2 o3 empresas de lubricnates",


  "Tratamiento de desechos",
  "manejar d emanera eficiente los desehco segun normativas vigentes y tambien mantener una imagen limpia",


  "maquinas y herraminetas a reutulizar",
  "Fidelizacion de erraminetas. ",



];

//INSERTAR PREGUNTAS EN DIV "campoPreguntas"
function insertarpreguntas(constantes){
	var node = document.getElementById("campoPreguntas")
	for (var i = 0; i<faqs.length; i=i+2){
		let newButton = document.createElement("button");
		newButton.className="accordion";
		newButton.innerHTML=faqs[i];
		node.appendChild(newButton);
		let newPanel= document.createElement("div");
		newPanel.className="panelfaq";
		newPanel.innerHTML=faqs[i+1];
		newPanel.style.color="#0f0f0f";
		node.appendChild(newPanel);
	}
}

//ACCORDION MENU
function accordionMenu(){
let acc = document.getElementsByClassName("accordion");
	for (var i = 0; i < acc.length; i++) {
	 	acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
			  panel.style.maxHeight = null;
			} else {
			  panel.style.maxHeight = panel.scrollHeight + "px";
			} 
	 	});
	}
}

insertarpreguntas(faqs);
accordionMenu();



 //WHATSAPP FUNCTION
//$(function () {
//        $('#WAButton').floatingWhatsApp({
//          phone: '5491165106333', //WhatsApp Business phone number
//           //headerTitle: 'Escribinos!', //Popup Title
//          popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
//          showPopup: true, //Enables popup display
//          buttonImage: '<img src="images/whatsappModern.png" />', //Button Image
//          //headerColor: 'crimson', //Custom header color
//          backgroundColor: 'crimson', //Custom background button color
//          position: "right" //Position: left | right
//   
//        });
//})()



// FUNCTION

//function inserstartextos(id,element){
//  document.getElementById(id).innerHTML=element;
//}
//
//
//inserstartextos("pregunta1",  constantes.pregunta1);
//inserstartextos("respuesta1", constantes.respuesta1);
//inserstartextos("pregunta2",   constantes.pregunta12);
//inserstartextos("respuesta2", constantes2.tituloServicios2);
//inserstartextos("pregunta3",   constantes2.descServicios2);
//inserstartextos("respuesta3", constantes2.tituloServicios3);
//inserstartextos("descServicios3",   constantes2.descServicios3);
//inserstartextos("tituloServicios4", constantes2.tituloServicios4);
//inserstartextos("descServicios4",   constantes2.descServicios4);







//onstruirElementoPregunta: function (pregunta) {
//   var contexto = this;
//   var nuevoItem;
//
//   //completar
//   //asignar a nuevoitem un elemento li con clase "list-group-item", id "pregunta.id" y texto "pregunta.textoPregunta"
//   nuevoItem = $(document.createElement('li'));
//   nuevoItem.addClass('list-group-item');
//   nuevoItem.attr('id', pregunta.id);
//   nuevoItem.text(pregunta.textoPregunta);
//
//   var interiorItem = $('.d-flex');
//   var titulo = interiorItem.find('h5');
//   titulo.text(pregunta.textoPregunta);
//   interiorItem.find('small').text(pregunta.cantidadPorRespuesta.map(function (resp) {
//     return " " + resp.textoRespuesta;
//   }));
//   nuevoItem.html($('.d-flex').html());
//   return nuevoItem;
// },
//
// reconstruirLista: function () {
//   var lista = this.elementos.lista;
//   lista.html('');
//   var preguntas = this.modelo.preguntas;
//   for (var i = 0; i < preguntas.length; ++i) {
//     lista.append(this.construirElementoPregunta(preguntas[i]));
//   }
// },