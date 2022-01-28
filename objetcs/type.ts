(() => {

    //Con esta palabra reservada lo que conseguimos es que 
    //se tenga un tipo de objeto personalizado a nuestro gusto
    type Hero = {
        name:string,
        age?:number,
        powers: string[],
        getName?: () => string
    }

    //Lo que acaba de pasar es que la funcion que hemos creado dentro del objeto
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
