(() => {

    //En este apartado podemos ver una variable puede tener más de un tipo

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomeVariable: (string | number | Hero) = 'Ignacio'
    console.log(typeof myCustomeVariable)

    myCustomeVariable = 20
    console.log(typeof myCustomeVariable)

    myCustomeVariable = {
        name : 'Ignacio',
        powers: ['Programar como un Dios', 'no escribir una frase recta']
    }
    console.log(typeof myCustomeVariable)

})()