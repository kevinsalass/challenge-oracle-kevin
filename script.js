function letras(string){//Solo letras
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyz" "';//Caracteres validos
	
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);
	
    //Retornar valor filtrado
    return out;
} 

function encriptar(){
    var text = document.getElementById("textoEncriptar").value.toLowerCase();
    
    //i = es para que letras mayusculas y minusculas 
    //g = tome en cuenta toda la linea o oracion 
    //m = tome en cuenta multiples lineas  

    var textEncriptado = text.replace(/e/igm, "enter");
    var textEncriptado = textEncriptado.replace(/o/igm, "ober");
    var textEncriptado = textEncriptado.replace(/i/igm, "imes");
    var textEncriptado = textEncriptado.replace(/a/igm, "ai");
    var textEncriptado = textEncriptado.replace(/u/igm, "ufat");

    document.getElementById("imgPersona").style.display = "none";
    document.getElementById("descripcion").style.display = "none";
    document.getElementById("descripcion-2").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = textEncriptado;
    document.getElementById("textoDesencriptado").style.display = "show";
    document.getElementById("textoDesencriptado").style.display = "inherit";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){
    var text = document.getElementById("textoEncriptar").value.toLowerCase();
    
    //i = es para que letras mayusculas y minusculas 
    //g = tome en cuenta toda la linea o oracion 
    //m = tome en cuenta multiples lineas  
    
    var textEncriptado = text.replace(/enter/igm, "e");
    var textEncriptado = textEncriptado.replace(/ober/igm, "o");
    var textEncriptado = textEncriptado.replace(/imes/igm, "i");
    var textEncriptado = textEncriptado.replace(/ai/igm, "a");
    var textEncriptado = textEncriptado.replace(/ufat/igm, "u");

    document.getElementById("imgPersona").style.display = "none";
    document.getElementById("descripcion").style.display = "none";
    document.getElementById("descripcion-2").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = textEncriptado;
    document.getElementById("textoDesencriptado").style.display = "show";
    document.getElementById("textoDesencriptado").style.display = "inherit";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}



