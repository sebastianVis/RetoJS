let letras = {
'.-': 'a',  '-...': 'b', '-.-.': 'c', '-..': 'd',
'.' : 'e', '..-.': 'f', '--.' : 'g', '....': 'h',
'..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l', '--': 'm',
'-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q',
'.-.': 'r', '...': 's', '-': 't', '..-': 'u', '...-': 'v',
'.--': 'w', '-..-': 'x', '-.--': 'y', '--..': 'z',
'/': ' ',
'.----': '1', '..---': '2',
'...--': '3', '....-': '4', '.....': '5', '-....': '6',
'--...': '7', '---..': '8', '----.': '9', '-----': '0',
'..-..': ',', '.-.-.-': '.', '..--..': '?'
};

let letrasNat = {
'a' : '.-',  'b': '-...', 'c' : '-.-.',
'd' : '-..', 'e' : '.', 'f' : '..-.',
'g' : '--.', 'h' : '....', 'i' : '..',
'j' : '.---', 'k' : '-.-', 'l' : '.-..',
'm' : '--', 'n' : '-.', 'o' : '---',
'p' : '.--.', 'q' : '--.-', 'r' : '.-.',
's' : '...', 't' : '-', 'u' : '..-',
'v' : '...-', 'w' : '.--', 'x' : '-..-',
'y' : '-.--', 'z' : '--..', ' ' : '/',

'1': '.----', '2': '..---', '3': '...--',
'4': '....-', '5': '.....',
'6': '-....', '7': '--...',
'8': '---..', '9': '----.',
'0': '-----',

'?': '..--..', ',':'..-..', '.':'.-.-.-'

}

let textoCompleto = 'Traduccion: ';
let init = true;
let text = false;
let morseText = false;

while (init == true){
    let menu = prompt(`Ingrese menu: 1. Morse a natural 2. Texto a morse 3. Salir`);
    if (menu == '1'){
        text = true;
        while(text == true){
            let morse = prompt(`ingrese letra en codigo morse, deje vacio para terminar`);
            if (morse == ''){
                text = false;
            }
            for (let palabra in letras){
                if (palabra === morse){
                    textoCompleto = (textoCompleto + `${letras[palabra]}`); 
                    console.log(`${palabra} : ${letras[palabra]}`);
                    break;
                }
            
                else if(palabra !== morse){
                    console.info('Invalido, no morse')
                }
            }
            }
            console.log(textoCompleto);
    }
    else if (menu == '2'){
        morseText = true;
        while (morseText = true){
            let textoEnMorse = prompt(`ingrese letra para pasar a codigo morse, deje vacio para terminar`);
            if (textoEnMorse == ''){
                morseText = false;
            }
            for (let palabra in letrasNat){
                if (palabra === textoEnMorse){
                    textoCompleto = (textoCompleto + `${letrasNat[palabra]}`); 
                    console.log(`${palabra} : ${letrasNat[palabra]}`);
                    break;
                }
            
                else if(palabra !== textoEnMorse){
                    console.info('Caracter Invalido, no es individual')
                }
            }
        }
    }
    else if (menu == '3'){
        init = false; 
    }
}
