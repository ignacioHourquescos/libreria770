// Al finalizarse de cargar el DOM:
var server ="http://localhost:5000";

var id=getQueryParam("id");
function obtenerListaEspecifica (id) {
	$(document).ready($.getJSON(server+"/listas/"+id, function (data) { 
		for(var i=0; i<data.recordsets[0].length;i++){
			let precioConIva=data.recordsets[0][i].precio_vta*1.21;
			data.recordsets[0][i].precio_vta_final=precioConIva.toFixed(0);
			data.recordsets[0][i].precio_vta=data.recordsets[0][i].precio_vta.toFixed(0);
		}
	$('table').bootstrapTable({ 
		  data: data.recordsets[0]
		}); 
	}));
	$('#myTable > thead  > tr.precio').css('width','initial');
	$('#myTable').css('table-layout','initial');
}

function myFunction() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInputCodigo");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[0];
	  if (tr[i].getElementsByTagName("td")[0]) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }       
	}
  }

//   function myFunction2() {
// 	var input, filter, table, tr, td, i, txtValue;
// 	input2 = document.getElementById("myInputDescripcion");
// 	filter = input2.value.toUpperCase();
// 	table = document.getElementById("myTable");
// 	tr = table.getElementsByTagName("tr");
// 	for (i = 0; i < tr.length; i++) {
// 	  td = tr[i].getElementsByTagName("td")[1];
// 	  if (td) {
// 		txtValue = td.textContent || td.innerText;
// 		if (txtValue.toUpperCase().indexOf(filter) > -1) {
// 		  tr[i].style.display = "";
// 		} else {
// 		  tr[i].style.display = "none";
// 		}
// 	  }       
// 	}
//   }




obtenerListaEspecifica(id);
