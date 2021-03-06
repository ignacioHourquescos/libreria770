// Al finalizarse de cargar el DOM:

function cargarOfertas () {
		//busca en el backend todas las ofertas
		$("#plantilla").hide();
		$.getJSON(('https://spreadsheets.google.com/feeds/list/1R5PAunP3ppaS2SOcTf6z2_BTOBlWxAIED1zxWnEg1us/1/public/values?alt=json'), function (data) {
		var numeroDePromociones = data.feed.entry.length;
		for (var i = 0; i < numeroDePromociones; i++) {
			var divCompetencia = $(".competenciaPlantilla").clone().removeClass("competenciaPlantilla");
			$(divCompetencia).find('.link').each( function(){
				$( this ).attr("href",$( this ).attr("href")+data.recordset[i].cod_articulo);
				});
			insertarDatosEnNuevoDiv(divCompetencia,data,i+1);
			
		}
		//$("#plantilla").remove(); // remueve la plnatilla que se carga con la pagina
	});
}


  
var precioAtnerior
function insertarDatosEnNuevoDiv(elemento,data,i){
	var idColor = 1;
	//trae data del backend desde un google sheets y lo va insertando en el titulo, el detalle, el precio etc.
	//data.feed.entry[i].gsx$promo.$t y similares es la manera de acceder al dato que nos da google sheets. No asustarse!!
	$(elemento).find('.titulo').text(data.feed.entry[i].gsx$promo.$t);
	$(elemento).find('.detalle').text(data.feed.entry[i].gsx$descripcion.$t);
	$(elemento).find('.preciolista').text(data.feed.entry[i].gsx$preciolista.$t);
	$(elemento).find('.precioOferta').text(data.feed.entry[i].gsx$preciooferta.$t);
	$(elemento).find('.card').addClass('color'+idColor); 
	$(".competencias").append(elemento);
	$(elemento).find('.imagenOferta').attr("src",data.feed.entry[i].gsx$urlimagen.$t);
		  $(elemento).show();
}


cargarOfertas();
