var listadoUrl=[
	{
		lista:"Oficina & Hogar",
		url:"https://docs.google.com/spreadsheets/d/1OS6vvVKksK6UptapP20_P6Q1TAPOk4QR6p2eslv9XKE/edit?usp=sharing"
	},
	{
		lista:"Embalaje",
		url:"https://docs.google.com/spreadsheets/d/1R5PAunP3ppaS2SOcTf6z2_BTOBlWxAIED1zxWnEg1us/edit?usp=sharing"
	}

]

function cambiarLista(){
var listaSeleccionada=document.getElementById("seleccionLista");
document.getElementById("seleccionLista").onchange= function imprimirPorPantalla(){
	for (var i =0; i<listadoUrl.length;i++){
		if(listadoUrl[i].lista==listaSeleccionada.value)
		var listaAMostrar = listadoUrl[i].url;
	}
	document.getElementById("iframe").src = concatenar(listaAMostrar);
}
}



function concatenar(url){
	let formato="&rm=minimal&amp;range=A1:C3&amp;single=true&amp;headers=false&amp;widget=false&amp;chrome=false";
	let urlFormateado =url+formato;
	return(urlFormateado);
}

cambiarLista();