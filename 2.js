
var L
var l
var t
var T
var converser ={
    /*////////////////IMPORTANTEEEEEEEEEEEEEEEEEEEEEEEEEEE//////////////////////////// */
    /*A LA HORA DE LLAMAR EL METODO converser.convertir LOS PARAMETROS A EXCEPCION DE medida TIENEN QUE
    SER PUESTOS COMO STRING CON LAS COMILLAS " " */
    convertir(medida, uniINI, uniFIN, tipo){
        if(tipo == "L" || tipo == "l"){
            if (uniINI == 'm' && uniFIN == 'cm'){
                return (medida + " metro/s son: " + medida*100 + " centimetros.");
            }
            if (uniINI == 'km' && uniFIN == 'm'){
                return (medida + " kilometro/s son: " + medida*1000 + " metros.");
            }
            if (uniINI == 'ft' && uniFIN == 'm'){
                return (medida + " pie/s son: " + medida*0.3048 + " metros.");
            }
        }
        if(tipo == "T" || tipo == "t"){
            if (uniINI == 'c' && uniFIN == 'f'){
                return (medida + " centigrado/s son: " + ((medida*(9/5))+32) + " farenheit.");
            }
            if (uniINI == 'k' && uniFIN == 'f'){
                return (medida + " kelvin son: " + ((9/5)*(medida-273)+32) + " farenheit");
            }
            if (uniINI == 'k' && uniFIN == 'c'){
                return (medida + " kelvin son: " + (medida-273) + " centigrados.");
            }
        }
    },
    metro: 'm',
    centimetro: 'cm',
    kilometro: 'km',
    pie: 'ft',
    centigrado: 'c',
    farenheit: 'f',
    kelvin: 'k'
}