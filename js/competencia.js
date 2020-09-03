// Esta es la ip y puerto en que necesitamos que esté el backend disponible
//const hostname = process.env.HOST || 'localhost:';
//const port = process.env.PORT || 5000;
var server ="http://localhost:5000";
//var server="https://renovapp.herokuapp.com"

function CompetenciasController () {
//Carga las cards de las listas de precios
	this.Listas = function (){
		var self = this;
		$.getJSON(server+"/listas2", function (data) {
				// Se carga la información obtenida en el DOM
				self.cargarAgrupaciones(data);});}
	this.cargarAgrupaciones = function (data){
		// Oculto la plantilla
		$(".competenciaPlantilla").hide();
		// Se recorren iterativamente, uno a uno, los resultados de competencias
		var cantidad = data.length;
		var idColor = 1;
		var idColorCrece = true;
		for (i = 0; i < cantidad; i++) {
			// Se clona la plantilla y la nueva copia ya no es una plantilla
			var divCompetencia = $(".competenciaPlantilla").clone().removeClass("competenciaPlantilla");
			// Se coloca el id correcto (data[i].id) de cada competencia en los links de acciones
			$(divCompetencia).find('.link').each( function(){
				$( this ).attr("href",$( this ).attr("href")+data[i].codigo);
			});
			// Se coloca el nombre de cada competencia
			$(divCompetencia).find('.titulo').text(data[i].descripcion);
			$(divCompetencia).find('.card').addClass('color'+idColor); 
			$(".competencias").append(divCompetencia);
			$(divCompetencia).show();}},

//Carga las listas especificas
	this.ListaEspecifica = function (id) {
			$(document).ready($.getJSON(server+"/listasDetalle2/"+id, function (data) { 
			$('table').bootstrapTable({ 
			  	data: data.recordsets[0]
				}); 
			}));}

}
 
