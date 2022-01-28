(()=>{

    //Declaracion del tipo de objeto personalizado Avenger
    type Avenger = {
        nombre:string,
        arma:string
    }

    //Declaracion del objeto iron man
    const ironman:Avenger = {
        nombre : 'Tony Stark',
        arma : 'Servo armadura'
    }

    //Declaracion del objeto capitan america
    const capitanAmerica:Avenger = {
        nombre : 'Capitan América',
        arma : 'Escudo'
    }

    //Declaracion del objeto Thor
    const thor:Avenger = {
        nombre : 'Thor',
        arma : 'Martillo nórdico'
    }

    //Declaracion del arreglo de avengers
    const avengers:Avenger[] = [ironman, capitanAmerica, thor];

    //* La idea del forof es como la del foreach, pero mejor para es el ES6
    //* para cada elemento de avengers la nombras como avenger y haces lo siguiente dentro del codigo
    for (const avenger of avengers) {
         console.log(avenger.arma, avenger.nombre)
    }

})()