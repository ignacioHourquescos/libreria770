// Al finalizarse de cargar el DOM:

var server ="http://localhost:5000";

function cargarOfertas () {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertas", function (data) {
	// Se carga la información obtenida en el DOM
		var cantidad = data.recordset.length;
    var idColor = 1;
   console.log(data);
		for (i = 0; i < cantidad; i++) {
      console.log(data.recordset[i].cod_articulo);
			// Se clona la plantilla y la nueva copia ya no es una plantilla
			var divCompetencia = $(".competenciaPlantilla").clone().removeClass("competenciaPlantilla");
			// Se coloca el id correcto (data[i].id) de cada competencia en los links de acciones
			$(divCompetencia).find('.link').each( function(){
				$( this ).attr("href",$( this ).attr("href")+data.recordset[i].cod_articulo);
      });
      //se crea el elemiento image
  
			// Se coloca el nombre de cada competencia
      $(divCompetencia).find('.titulo').text(data.recordset[i].cod_articulo);
      $(divCompetencia).find('.detalle').text(data.recordset[i].descrip_arti);
			$(divCompetencia).find('.card').addClass('color'+idColor); 
      $(".competencias").append(divCompetencia);
      $(divCompetencia).find('.imagenOferta').attr("src",data.recordset[i].web_imagen);
			$(divCompetencia).show();
		};
	});
	
}
  


cargarOfertas();