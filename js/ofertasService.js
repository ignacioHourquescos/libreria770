
// Al finalizarse de cargar el DOM:

//https://docs.google.com/spreadsheets/d/e/2PACX-1vQFgR7uLtcYKphmlAmKvdH5GYpbPEyBcL_LNLlQAoLHI_HfAVZDqQHINDrsOI35sj6BB6p3XwKh6CPc/pubhtml

//https://docs.google.com/spreadsheets/d/e/2PACX-1vSF1Vy5VeCieoKhVXYHUWPWmus4iNsPJgSfIblLBhdUpsC2ILanjtpWmSYxPoHB7jo7y0m0Egn3ngde/pubhtml

//https://docs.google.com/spreadsheets/d/1R5PAunP3ppaS2SOcTf6z2_BTOBlWxAIED1zxWnEg1us/edit?usp=sharing



function cargarOfertas () {
		//busca en el backend todas las ofertas
		$("#plantilla").hide();
      		console.log("aca hay data");
		$.getJSON(('https://sheets.googleapis.com/v4/spreadsheets/1R5PAunP3ppaS2SOcTf6z2_BTOBlWxAIED1zxWnEg1us/values/1?alt=json&key=AIzaSyBPapQfp9clNlpDy-_y3Gqy-LomxzZcPWE'), function (data) {
		console.log("aca hay data2");
      console.log(data);
      var numeroDePromociones = data.values.length;
		for (var i = 1; i < numeroDePromociones; i++) {
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
	$(elemento).find('.titulo').text(data.values[i][0]);
	$(elemento).find('.detalle').text(data.values[i][1]);
	$(elemento).find('.preciolista').text(data.values[i][2]);
	$(elemento).find('.precioOferta').text(data.values[i][3]);
	$(elemento).find('.card').addClass('color'+idColor); 
	$(".competencias").append(elemento);
	$(elemento).find('.imagenOferta').attr("src",data.values[i][4]);
		  $(elemento).show();
}


cargarOfertas();
