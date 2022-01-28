(() => {

    //Declaramos la inicializacion clase Mutante
    //? las clases abstractas no estan pensadas para ser creadas, sino para que las hijas implementen los elementos del padre
    abstract class Mutante {
        constructor(
            public nombre:string,
            public nombreReal:string,
        ){}
    }

    class Xmen extends Mutante {
        public salvarMundo ():string{
            return 'Mundo salvado'
        }
    }
    
    class villano extends Mutante{

        public conquistarMunnd():string {
            return 'Mundo conquistado'
        }
    }

    //Podemos indicar el nombre de la clase como tipo de la variable 
    const wolverine =  new Xmen('Wolverine','Logan')
    const magneto = new villano('Mageneto','Magnus')

    // console.log (wolverine.salvarMundo())
    // console.log (magneto.conquistarMunnd())

    const imprimirNombre = (persona:Mutante) => {
        console.log (persona.nombreReal)
    }

    // imprimirNombre(magneto);

})()