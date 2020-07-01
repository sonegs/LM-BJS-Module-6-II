//ALGORITMOS II

//MÁQUINA ENIGMA

// Declaración de variables
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var areaDecrypt = "areaDecrypt";
var areaEncrypt = "areaEncrypt";
var main = document.getElementById("main");

var showWeb = () => { // Creación de los elementos HTML de la web
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.style = "text-align: center";
    var div3 = document.createElement("div");
    var textArea = document.createElement("textarea");
    var title = document.createElement("h2");
    title.innerText = "ENIGMA";
    title.style = "text-align: center";
    textArea.setAttribute("id", areaEncrypt);
    textArea.style = "width: 100%; height: 150px";
    var code = document.createElement("textarea");
    code.setAttribute("id", areaDecrypt);
    code.style = "width: 100%; height: 150px";
    var encryptButton = document.createElement("button");
    var decryptButton = document.createElement("button");
    encryptButton.setAttribute("id", "encrypt");
    decryptButton.setAttribute("id", "decrypt");
    var encryptText = document.createTextNode("Encriptar");
    var decryptText = document.createTextNode("Traducir");
    main.appendChild(div).appendChild(title);
    main.appendChild(div).appendChild(textArea);
    main.appendChild(div2).appendChild(encryptButton).appendChild(encryptText);
    main.appendChild(div2).appendChild(decryptButton).appendChild(decryptText);
    main.appendChild(div3).appendChild(code);
};
// Esta función devuelve el caracter que se encuentra en el mismo indice del alfabeto a devolver
// dependiendo del tipo de acción especificada (encriptar o desencriptar), busca en un alfabeto o en otro
var decrypting = (translation, position) => {
    if (translation === "decrypting") return plainAlphabet[position];
    if (translation === "encrypting") return encryptedAlphabet[position];
};


// Esta función detecta si hay algun espacio en los caracteres del textarea,
// busca los caracteres en el alfabeto correspondiente y llama a la función decrypting, 
// enviandole la acción a realizar (encriptar o desencriptar) y el indice de esa letra
var lookingSymbol = (alphabet, code, translation) => {
    var result = "";
    if (code === " ") {
        return code;
    } else {
        for (var characters of alphabet) {
            if (characters === code) result = decrypting(translation, alphabet.indexOf(characters));
        }
    }
    return result;
};


//Esta función coge los valores del textarea correspondiente,
//convierte los caracteres a minúscula para evitar problemas en la búsqueda,
//añade un bucle for para añadir los valores encontrados al textarea y llama a la funcion lookingSymbol
//finalmente, limpia el textarea inicial

var enigma = (type, myArea, hisArea, myAlphabet) => {
    var symbols = document.getElementById(myArea).value.toLowerCase();
    document.getElementById(hisArea).value = "";
    for (var symbol of symbols) {
        document.getElementById(hisArea).value += lookingSymbol(myAlphabet, symbol, type);
    }
    document.getElementById(myArea).value = "";
};

// Detecta la acción a realizar (en este caso, encriptar) y llama a la función enigma
var encrypt = () => {
    var whatIs = "encrypting";
    return enigma(whatIs, areaEncrypt, areaDecrypt, plainAlphabet);
};

// Detecta la acción a realizar (en este caso, interpretar el mensaje) y llama a la función enigma
var decrypt = () => {
    var whatIs = "decrypting";
    return enigma(whatIs, areaDecrypt, areaEncrypt, encryptedAlphabet);
};

// Llamada a la función para crear los elementos HTML y para escuchar los botones de encrypt y dencrypt

showWeb();
document.getElementById("encrypt").addEventListener("click", encrypt);
document.getElementById("decrypt").addEventListener("click", decrypt);

// GENERADOR ALEATORIO

// Esta función crea un bucle for para introducir los números en el array
// antes de introducirlos, valora si están repetidos o no

var randomPick = (n, min, max) => {
    var result = [];
    const range = max - min + 1;
    for (var i = 0; i < n - 1; i++) {
        var isRepeat = true;
        do {
            var temp = randomNumber(range, min);
            isRepeat = repeat(temp, result);
        } while (isRepeat === true);
        result[i] = temp;
    }
    return result;
};

// Esta función genera un número aleatorio entre los valores indicados
var randomNumber = (range, min) => {
    return Math.floor(Math.random() * range) + min;
};

// Esta función valora si el número devuelto por la funcion randonNumber está repetido o no
// si está repetido, devuelve true, por lo que no permite salir del bucle dowhile de la variable randomPick()
// si no esta repetido, devuelve false, y así el número aleatorio almacenado en la variable temp 
// se añade al array al final de la funcion randomPick()

var repeat = (num, result) => {
    var repe = false;
    for (var i = 0; i <= result.length; i++) {
        if (num === result[i]) { // son validos?
            repe = true;
            return repe;
        } else {
            repe = false;
        }
    }
    return repe;
};

// Imprime por consola el array con los números aleatorios

console.log("El generador aleatorio ha obtenido los siguientes números: " + randomPick(11, 0, 100));