// ejercicios tomados de http://multimedia.uoc.edu/blogs/pw/es/2013/09/17/exercicis-de-javascript-iniciacio/
// EJERCICIO 1 HOLA MUNDO
    //alert('hola mundo');
 
// EJERCICIO 2 HOLA MUNDO (DOCUMENT WRITE)
    //document.write('Hola mundo');

//EJERCICIO 3 Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
    //document.write(3+5);

//EJERCICIO 4 Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
    /* let nombre = prompt("digite su nombre");
    alert(`Hola ${nombre} `); */

//EJERCICIO 5 Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
/*     const num1 = parseInt(prompt("Escriba el primer numero: "));
    const num2 = parseInt(prompt("escriba el segundo numero: "));
    alert("la suma es "+ (num1 + num2)); */

//EJERCICIO 6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

    /* const num1 = parseInt(prompt("Escriba el primer numero: "));
    const num2 = parseInt(prompt("escriba el segundo numero: "));
    if(num1 > num2){
        alert('El numero mayor es ' + num1);
    }else{
        alert('El numero mayor es ' + num2);
    } */

//EJERCICIO 7 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

    /* const num1 = parseInt(prompt("Escriba el primer numero: "));
    const num2 = parseInt(prompt("escriba el segundo numero: "));
    const num3 = parseInt(prompt("escriba el tercer numero: "));

    if((num1 > num2) && (num1 > num3)){
        alert('El numero mayor es ' + num1);
    }else if((num2 > num1) && (num2 > num3)){
        alert('El numero mayor es ' + num2);
    }else{
        alert('El numero mayor es ' + num3);
    } */

//EJERCICIO 8 Escribe un programa que pida un número y diga si es divisible por 2

    /* const num = parseInt(prompt("Digite un numero"));
    
    if((num%2) == 0){
        alert("El numero es divisible por 2");
    }else{
        alert("El numero no es divisible por 2");
    } */

//EJERCICIO 9 Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

   /*  const texto = prompt("Escriba una frase");
    let a = 0;
    for(let i=0 ; i<texto.length; i++){
        if((texto[i] == 'a') || (texto[i] == 'A') ){
            a++;
        }
    }
    alert(`el texto tiene ${a} letras A`); */

//EJERCICIO 10 Escribe un programa que pida una frase y escriba las vocales que aparecen
    /*  const texto = prompt("Escriba una frase");
    let vocales = [];

    for(let i=0 ; i<texto.length; i++){
        switch(texto[i]){
            case 'a' || 'A':
                vocales[i] = texto[i];
            break;
            case 'e' || 'E':
                vocales[i] = texto[i];
            break;
            case 'i' || 'I':
                vocales[i] = texto[i];
            break;
            case 'o' || 'O':
                vocales[i] = texto[i];
            break;
            case 'u' || 'U':
                vocales[i] = texto[i];
            break;
        }
    }

    alert("Vocales " + vocales);  */

//EJERCICIO 11 Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales

    /* const texto = prompt("Escriba una frase");
        let vocales = 0;

        for(let i=0 ; i<texto.length; i++){
            switch(texto[i]){
                case 'a' || 'A':
                    vocales++;
                break;
                case 'e' || 'E':
                    vocales++;
                break;
                case 'i' || 'I':
                    vocales++;
                break;
                case 'o' || 'O':
                    vocales++;
                break;
                case 'u' || 'U':
                    vocales++;
                break;
            }
        }

    alert("la frase tiene " + vocales + " vocales"); */

