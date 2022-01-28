(() => {

    //Creamos una clase de tipo Avengerw
    class Avenger {

        //? private quiere decir que solo voy a tener acceso a esta propiedad dentro de esta clase, se necesita un metodo dentro de la clase para poder acceder
        // private nombre: string;
        //? publica quiere decir que va a poder ser vista desde fuera de la clase, con poner el .atrituto ya se puede ver la propiedad. 
        // private team: string;
        //? podemos hacer la propiedad opcional con el signo "?"
        // public nombreReal?: string;
        //? les podemos dar propiedades estáticas a los atributos y podemos incluso darles valores por defecto, se acceden llamando a la clase en si
        static edadPromedia: number = 35;
        static getEdadPromedia() {
            return this.edadPromedia;
        };

        //?Indicamos que nombreReal (nr) tambien es opcional
        //* Con esta instruccion estamos diciendo que la propiedad nombre es privada y la estamos declarando a la misma vez dentro del contructor
        constructor(
            private nombre: string,
            private team: string,
            public nombreReal?: string,

        ) {

            /*
            this.nombre = n;
            this.team = t;
            this.nombreReal = nr
            */
        }



        /*
        Con public no pasa nada, se puede ver desde fuera
        Con private en teoria la funcion solo se puede acceder desde dentro de la clase, no desde fuera
        */

        public bio(): string {
            return `${this.nombre} (${this.team})`
        }
    }

    //Declaramos la constante "Antman" que es de tipo "Avenger" y lo creamos con la clase "Avenger"
    const antman: Avenger = new Avenger('RangerVeterano', 'RNC', 'Ignacio Bohigues')

    //! los comentamos para tener limpio el siguiente ejercicio
    // console.log(antman)
    // console.log(Avenger.getEdadPromedia())

    //* las propiedades estáticas se pueden consumir de forma global sin la necesidad de instanciar la clase, con solo referenciarla se puede ver
    //console.log (Avenger.edadPromedia)

})()