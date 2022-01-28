(() => {

    interface Hero  {
        name: string,
        age?: number, //Opcional
        powers: string[],
        getName?: () => string //opcional
    }

    let flash: Hero = {
        name: 'Barri allen',
        age: 24,
        powers: ['super velocidad', 'Viajar en el tiempo']
    }

    let superMan: Hero = {
        name: 'Clark kent',
        age: 60,
        powers: ['super velocidad'],
        getName() {
            return this.name
        }
    }

    

})()