(() => {


    //Lo que acaba de pasar es que la funcion que hemos creado dentro del objeto
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barri allen',
        age: 24,
        powers: ['super velocidad', 'Viajar en el tiempo']
    }

    let superMan: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Clark kent',
        age: 60,
        powers: ['super velocidad']
    }

    console.log(flash)

    // flash = {

    //     name: 'Clark kent',
    //     // age: 60,
    //     powers: ['Super fuerza'],

    //     getName() {
    //         return this.name
    //     }
    // }

    // console.log(flash.getName())

})()
