(() => {

    //Declaracion del Tipo avenger
    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    //Declaracion de la constante avengers
    const avengers: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul bettany',
        activo: true,
        poder: 1500
    }

    // const { poder, vision } = avengers
    // console.log(poder, vision.toUpperCase())

    //Funcion para la impresion de una propiedad de avengers 
    //* algo que estoy entendiendo de descontruir el objeto es sacar una propiedad y guardarla dentro de una variable 
    //* lo que ha pasado es que la propiedad se ha sacado del objeto y ha pasado a estar en una variable fuera del objeto y este objeto a su vez ha perdido la propiedad
    const printAvenger = ({ ironman, ...resto }: Avenger) => {
        console.log(ironman, resto);
    }

    // printAvenger(avengers);

    //todo ARREGLOS

    const avengersArr:[string,boolean, number] = ['Cap. América', true, 1000];

    //* con la desestructuracion de los arreglos indicamos que es un array con las llaves cuadradas y luego decimos que nos saltamos el 1º valor para luego coger el segundo valor y luego ignorar el tercer valor
    //* podemos decidir el nombre de las variables en este punto
    //typeScripy sabe en todo momento el tipo de variable que es en todo momento
    const [capitan, ironman,seriaNumero] = avengersArr  // const ironman = avengersArr[1];
    //console.log({ ironman , capitan, seriaNumero})

})()