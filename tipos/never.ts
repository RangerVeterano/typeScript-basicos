(()=>{


    /*
    El never consiste en que luego de que  se llame el programa no tiene que continuar,
    es decir que se tiene que parar la ejecución
    */
    const error = (message:string):never => {
        throw new Error(message)
    } 

    /*
    Otro caso para que no ocurra lo de arriba es que podemos indicarle a la funcion
    que lance o bien never o un numero como se va a ver en el siguente caso
    */

    const error2 = (message:string):(never | number) => {
        
        if(false){
            throw new Error(message)
        }
        
        return 1;
    } 

    /*
    En el caso de arriba podemos ver que puede que lance un error o bien devuelva un numero
    */

    error('Auxilio me desmayo');
    console.log('Hola mundo')

})()