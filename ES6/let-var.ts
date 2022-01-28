(() => {

    // console.log('let');
    //Para typescript var no existe (Variable global que está presente en todo el código)

    //console.log(a);


    let a: string = 'Ignacio' //La forma correcta para declarar una variable


    const getName = function (): void { } //Esto es igual de correcto que "const getName = () => {};"
    //*Lo bueno de declarar las variables como constantes es que nos podemos evitar cambiar su valor de forma accidental

    //*Pero lo hacemos de la forma convencional si que podemos cambiar el contenido de la funcion, para este caso

    //*Este codigo funciona porque estamos con el ES5, pero cuando pasemos al ES6 nos debería de dar error
    const obtenerNombre = (): void => {
        console.log('Antiguo obtenerNombre')
    }

    //obtenerNombre = () => {console.log('Nuevo obtenerNombre')}
    //btenerNombre()

    //*Aunque una constante no se pueda cambiar sus valores es mejor trabajar con constantes hasta que tengamos claro que la variable va a variar
    // const HERO = {
    //     a:1,
    //     b:2
    // }

    // HERO.b = 100 ;

})()