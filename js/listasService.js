// Al finalizarse de cargar el DOM:

var server ="http://localhost:5000";

function cargarListas () {
	//Carga las cards de las listas de precios
	$.getJSON(server+"/listas", function (data) {
	// Se carga la información obtenida en el DOM
		var cantidad = data.length;
		var idColor = 1;
		for (i = 0; i < cantidad; i++) {
			// Se clona la plantilla y la nueva copia ya no es una plantilla
			var divCompetencia = $(".competenciaPlantilla").clone().removeClass("competenciaPlantilla");
			// Se coloca el id correcto (data[i].id) de cada competencia en los links de acciones
			console.log(data[i].codigo);
			$(divCompetencia).find('.link').each( function(){
				$( this ).attr("href",$( this ).attr("href")+data[i].codigo);
			});
			// Se coloca el nombre de cada competencia
			$(divCompetencia).find('.titulo').text(data[i].descripcion);
			$(divCompetencia).find('.card').addClass('color'+idColor); 
			$(".competencias").append(divCompetencia);
			$(divCompetencia).show();
		};
	});
	
}
	

cargarListas();