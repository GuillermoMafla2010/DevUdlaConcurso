var input=prompt("Escribe una cadena")
//this.transform(input) // llamada al metodo
this.cargar_arreglo(input)
var cadena=''
var resultado=[]
var contador=0

/******************* DA VUELTA A UN ARRAY Y CAPITALIZA PRIMERA LETRA ********/
/*for(var i = input.length-1 ; i>=0 ; i--){
   
   
   cadena+=input[i];

   if(cadena.length==input.length){
       this.capitalizar(cadena)
   }

}

function capitalizar(cadena){
    console.log(cadena.charAt(0).toUpperCase() + cadena.slice(1));
}*/
/////////////////FIN DA VUELTA ARRAY ///////////////////////////////////////////////////////////////////////


///////VERIFICA SI EN UNA CADENA EXISTE UN NUMERO Y SUMA EN CASO DE HABERLOS ///////////////////////////////////

/*var numeros=[1,2,3,4,5,6,7,8,9,0];




for(var i=0 ; i<input.length ; i++){
    if(this.numeros.includes(Number(input[i]))){
        console.log("contiene un numero")
        this.resultado.push(input[i])
    }else{
        console.log("no contiene un numero")
        
    }
   
   if(i==(input.length-1)){
       suma()
   }
    
}

function suma(){
    let suma = 0;
    for (var j=0 ; j<resultado.length ; j++){
        
        suma+=Number(resultado[j])
    }
    console.log(suma)
}*/

////// FIN VERIFICA SI EN UNA CADENA EXISTE UN NUMERO Y SUMA EN CASO DE HABERLOS ///////////////////////////////////




//VERIFICA CUANTAS VECES SE REPITE UN CARACTER EN UN ARRAY/////////////////////////////////////////

/*for(var i = 0 ; i<input.length ; i++){
    resultado.push(input[i])
   

}

    var current = null;
    var cnt = 0;
    for (var i = 0; i < resultado.length; i++) {
        if (resultado[i] != current) {
            if (cnt > 0) {
                console.log(current + ' comes --> ' + cnt + ' times');
            }
            current = resultado[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
    }*/


///////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////ENCRIPTACION///////////////////////////////////////////////////////////

/*function transform(text) {
    var s = text.split('');
    for (var i = 0; i < s.length; i++) {
        // Caesar cipher
        switch(s[i]) {
          case ' ':
            break;
          case 'z':
            s[i] = 'a';
            break;
          case 'Z':     // One case you forgot to handle
            s[i] = 'A';
            break;
          default:
            s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        // Upper-case vowels
        switch(s[i]) {
          case 'a': case 'e': case 'i': case 'o': case 'u':
            s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}

*/
/////////////////////////////////////////////////////////////////////////////////////////////



function cargar_arreglo(input){
    let contador=2;
    let respuesta=1;
    for(var i=1 ; i<input ; i++){
       
    }
}