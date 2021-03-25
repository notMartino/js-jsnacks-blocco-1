// ES 1- Array di obj {zucchina (varietà, peso, lunghezza)}
function es1() {
    console.log('ES 1');

    var listZucchini = [
        {
            'varieta': 'Olandese',
            'peso': 0.7,
            'lunghezza': 10
        },
        {
            'varieta': 'Italiana',
            'peso': 1,
            'lunghezza': 16
        },
        {
            'varieta': 'Verdina',
            'peso': 2,
            'lunghezza': 15.5
        },
        {
            'varieta': 'Corta',
            'peso': 0.5,
            'lunghezza': 5
        },
        {
            'varieta': 'Ghiaccio',
            'peso': 4,
            'lunghezza': 19
        }
    ];
    sommaPeso(listZucchini);

    return listZucchini;
}

function sommaPeso(listZucchini) {
    var sumPeso = 0;
    for (let i = 0; i < listZucchini.length; i++) {
        sumPeso += listZucchini[i].peso;
        console.log('Zucchina ' + i + ': ' + listZucchini[i].peso + 'kg');
    }
    console.log('Peso totale zucchine: ' + sumPeso + 'kg');
    console.log(' ');
}


// ES 2- Dividi la lista zucchine in 2 (lungh < 15 e lungh >= 15)
// Stampa il peso totale dei due gruppi
function es2(listaZucchine) {
    console.log('ES 2');

    var listaShort = [];
    var listaLong = [];

    for (let i = 0; i < listaZucchine.length; i++) {
        if (listaZucchine[i].lunghezza >= 15) {
            listaLong.push(listaZucchine[i]);
        }else{
            listaShort.push(listaZucchine[i]);
        }
    }

    console.log('Peso totale zucchine corte: ' );
    sommaPeso(listaShort);

    console.log('Peso totale zucchine lunghe: '); 
    sommaPeso(listaLong);
    
    console.log(' ');
}

// ES 3- Stringa al contrario
function es3() {
    console.log('ES 3');
    var stringa = 'Martino';
    console.log('Stringa: ' + stringa);
    
    var stringaReverse = '';

    for (let i = 0; i < stringa.length; i++) {
        stringaReverse = stringa[i] + stringaReverse;
    }
    console.log('Reversed: ' + stringaReverse);

    console.log(' ');
}

// ES 4- Array fusi, stessa quantita di elementi
function es4() {
    console.log('ES 4');

    var arrNum = [1,2,3];
    var arrChar = ['a','b','c'];
    var arrFuse = [];
    console.log('Array 1: ' + arrNum);
    console.log('Array 2: ' + arrChar);

    for (let i = 0; i < arrNum.length; i++) {
        arrFuse.push(arrNum[i], arrChar[i])
    }
    console.log('Array fuso: ' + arrFuse);

    console.log(' ');
}

// ES 5- Inserisci in un array elem in range di posizioni (a < b, b <= max)
function es5() {
    console.log('ES 5');
    var rangeArray = [];
    var max = 7;
    var min = 1;
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Array: ' + array);
    console.log('Range min posizione: ' + min);
    console.log('Range max posizione: ' + max);

    for (let i = min; i <= max; i++) {
        rangeArray.push(array[i]);
    }
    console.log('Array in range: ' + rangeArray);

    console.log(' ');
}

function init(){
    var listaZucchine = es1();
    es2(listaZucchine);
    es3();
    es4();
    es5();
}
init();