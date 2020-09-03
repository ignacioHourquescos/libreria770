// Al finalizarse de cargar el DOM:

var server ="http://localhost:5000";


function cargarOfertas () {
		//busca en el backend todas las ofertas
		$.getJSON(('https://spreadsheets.google.com/feeds/list/1OS6vvVKksK6UptapP20_P6Q1TAPOk4QR6p2eslv9XKE/1/public/values?alt=json'), function (data) {
		var numeroDePromociones = data.feed.entry.length;
		for (var i = 0; i < numeroDePromociones; i++) {
			// Se clona la plantilla y la nueva copia ya no es una plantilla
			var divCompetencia = $(".competenciaPlantilla").clone().removeClass("competenciaPlantilla");
			// Se coloca el id correcto (data[i].id) de cada competencia en los links de acciones
			$(divCompetencia).find('.link').each( function(){
				$( this ).attr("href",$( this ).attr("href")+data.recordset[i].cod_articulo);
				});
			insertarDatosEnNuevoDiv(divCompetencia,data,i);
		}
		$("#plantilla").remove();
	});
}
  
function insertarDatosEnNuevoDiv(elemento,data,i){
	var idColor = 1;
	$(elemento).find('.titulo').text(data.feed.entry[i].gsx$promo.$t);
	$(elemento).find('.detalle').text(data.feed.entry[i].gsx$descripcion.$t);
	$(elemento).find('.precio').text(data.feed.entry[i].gsx$precio.$t);
		  $(elemento).find('.card').addClass('color'+idColor); 
	$(".competencias").append(elemento);
	$(elemento).find('.imagenOferta').attr("src",data.feed.entry[i].gsx$imagen.$t);
		  $(elemento).show();
}


cargarOfertas();
