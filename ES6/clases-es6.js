(() => {

    //creamos la clase avenger
    class avenger {

        nombre; //propiedad nombre
        power; //propiedad poder

        //Declaramos el constructor de la calse
        constructor(nombre = 'no name',power = 0) {
            this.nombre = nombre;
            this.power = power;
        }

    }

    //Esta clase hereda de avenger, se extiende, pero esta clase es la hija de avenger
    class flyingAvenger extends avenger  {
        flying;

        //constructor de la clase flyingAvenger
        constructor(nombre, poder){
            super(nombre, poder); //indicamos el constructor del padre
            this.flying = true;
        }
    }

    //Creamos la variable de la clase de avenger
    const hulk = new avenger('suck', 9001)
    const falchon = new flyingAvenger('Falchon', 50)

    //imprimimos hulk
    console.log(hulk, falchon)

})()