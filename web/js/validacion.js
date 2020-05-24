function Validar(){
	if(document.validacorreo.email.value.length==0){
		alert("Ingrese su correo por favor.");
		document.validacorreo.email.focus();
		return 0;
	}

	document.validarcontacto.submit();
	alert("Muchas gracias por enviar su correo, en breve se le enviará el formulario.");
}

function Validarform(){
	if(document.validarcontacto.nom.value.length==0){
		alert("Falta ingresar su nombre.");
		document.validarcontacto.nom.focus();
		return 0;
	}

	if(document.validarcontacto.ape.value.length==0){
		alert("Falta ingresar sus apellidos.");
		document.validarcontacto.ape.focus();
		return 0;
	}

	if(document.validarcontacto.dni.value.length==0){
		alert("Falta imgresar su DNI.");
		document.validarcontacto.dni.focus();
		return 0;
	}

	if(document.validarcontacto.cel.value.length==0){
		alert("Falta ingresar su número de celular, para así poder contactarlo en caso sea necesario.");
		document.validarcontacto.cel.focus();
		return 0;
	}
	
	if(document.validarcontacto.cel.value.length==0){
		alert("Falta ingresar su número de celular, para así poder contactarlo en caso sea necesario.");
		document.validarcontacto.cel.focus();
		return 0;
	}

	if(document.validarcontacto.correo.value.length==0){
		alert("Falta ingresar su correo, para así poder enviarle su respuesta.");
		document.validarcontacto.correo.focus();
		return 0;
	}

	if(document.validarcontacto.area.value.length==0){
		alert("Debe ingresar su consulta.");
		document.validarcontacto.area.focus();
		return 0;
	}

	document.validarcontacto.submit();
	alert("Gracias por enviarnos su consulta, en breve nos contactaremos con usted.");
}

function Validarlogin(){
	if(document.validarlogin.usuario.value.length==0){
		alert("Falta ingresar el nombre de usuario.");
		document.validarlogin.usuario.focus();
		return 0;
	}

	if(document.validarlogin.contra.value.length==0){
		alert("Falta ingresar la contraseña.");
		document.validarlogin.contra.focus();
		return 0;
	}

	document.validarlogin.submit();
	alert("Bienvenido al sistema.");
}

function validarletras(e){
	key = e.keyCode || e.which;
	teclado = String.fromCharCode(key).toLowerCase();
	letras = " abcdefghijklmnñopqrstuvwxyzáéíóú";
	especiales = "8-13-37-38-46-164";
	teclado_especial = false;
	for(var i in especiales){
		if(key == especiales[i]){
			teclado_especial = true;
			break;
		}
	}

	if(letras.indexOf(teclado) == -1 && !teclado_especial){
		alert("Ingresar solo letras");
		return false;
	}
}

function validarnumeros(evt){
	if(window.event) {
		keynum = evt.keyCode;
	} else {
		keynum = evt.which;
	}

	if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13){
		return true;
	} else {
		alert("Ingrese solo números.");
		return false;
	}
}

